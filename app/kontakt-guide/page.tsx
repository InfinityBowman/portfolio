import Link from "next/link";
import LibraryPriceItem from "@/components/ui/library-price-item";
import { createClient } from "@/utils/supabase/server";
import { PriceItem } from "@/lib/definitions";
import GuideTabs from "@/components/ui/guide-tabs";

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
      <div className="flex flex-col gap-8 w-full">
        <div className="flex justify-center text-5xl">Sampled Instrument Guide</div>
        <GuideTabs />
        <div className="text-xl">
          {prices.map((item) => (
            <LibraryPriceItem key={item.name} item={item} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
