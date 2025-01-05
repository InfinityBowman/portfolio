import LibraryPriceItem from "@/components/ui/library-price-item";
import { createClient } from "@/utils/supabase/server";
import { PriceItem } from "@/lib/definitions";
import GuideHero from "@/components/ui/kontakt-guide/guide-hero";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: prices, error } = await supabase
    .from<PriceItem["name"], PriceItem["price"]>("prices")
    .select("name, price, company");

  if (error) {
    console.error("Error fetching prices:", error);
    return <div>Error fetching prices</div>;
  }

  return (
    <>
      <GuideHero />
      {/* <div className="text-xl">
          {prices.map((item) => (
            <LibraryPriceItem key={item.name} item={item} user={user} />
          ))}
        </div> */}
    </>
  );
}
