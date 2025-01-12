import LibraryPriceItem from "@/components/ui/kontakt-guide/library-price-item";
import { createClient } from "@/utils/supabase/server";
import { PriceItem } from "@/lib/definitions";
import GuideHero from "@/components/ui/kontakt-guide/guide-hero";
import { fetchVotes, Company } from "@/lib/fetch-votes";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: prices, error } = await supabase
    .from<PriceItem["name"], PriceItem["price"]>("prices")
    .select("name, price, company, votes");

  console.log("Fetched price data:", prices);

  if (error) {
    console.error("Error fetching prices:", error);
    return <></>;
  }

  const companies: Company[] = await fetchVotes();

  const companiesWithVotes = companies.map((company: Company) => {
    const voteData = companies.find((vote) => vote.companyName === company.companyName);
    return {
      companyName: company.companyName,
      votes: voteData ? voteData.votes : 0,
    };
  });

  return (
    <>
      <GuideHero companiesWithVotes={companiesWithVotes} user={user} />
      {/* <div className="text-xl">
          {prices.map((item) => (
            <LibraryPriceItem key={item.name} item={item} user={user} />
          ))}
        </div> */}
    </>
  );
}
