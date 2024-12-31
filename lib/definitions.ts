import { User } from "@supabase/supabase-js";

export interface PriceItem {
  name: string;
  company: string;
  price: number;
}

export interface PriceItemProps {
  item: PriceItem;
  user: User | null;
}
