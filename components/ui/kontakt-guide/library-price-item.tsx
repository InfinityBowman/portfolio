import Link from "next/link";
import PriceScraperButton from "@/components/ui/kontakt-guide/price-scraper-button";
import { PriceItemProps } from "@/lib/definitions";

const PriceItem: React.FC<PriceItemProps> = ({ item, user }) => {
  return (
    <div key={item.name} className="mb-4">
      <div className="flex items-center space-x-4">
        <Link
          href={`https://impactsoundworks.com/product/tokyo-scoring-strings/`}
          className="hover:underline"
          rel="noopener noreferrer"
        >
          {item.company} - {item.name}
        </Link>
        <span className="text-lg text-primary">${item.price}</span>
        {user && user.email === "jacobamaynard@proton.me" && <PriceScraperButton />}
      </div>
    </div>
  );
};

export default PriceItem;
