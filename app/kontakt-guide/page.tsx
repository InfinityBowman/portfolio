import Link from "next/link";
import PriceScraperButton from "@/components/ui/price-scraper-button";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="text-5xl">Sampled Instrument Guide</div>
        <div className="text-xl">
          <Link
            href="https://impactsoundworks.com/product/tokyo-scoring-strings/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impact Soundworks Tokyo Scoring Strings
          </Link>
          <PriceScraperButton />
          <span className="ml-2 text-lg text-gray-500">$499</span>
        </div>
      </div>
    </>
  );
}
