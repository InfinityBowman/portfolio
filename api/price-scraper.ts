import { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import puppeteer from "puppeteer";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

async function scrapePrice(): Promise<string> {
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto("https://impactsoundworks.com/product/tokyo-scoring-strings/");

  // const priceSelector: string = ".price"; // Example selector
  // const price: string = await page.$eval(priceSelector, (el: Element) => (el as HTMLElement).innerText);

  // await browser.close();

  const { data, error } = await supabase
    .from("prices")
    .insert([{ item_key: "tokyo_scoring_strings", price: "399", checked_at: new Date().toISOString() }]);

  if (error) {
    console.error("Error inserting data:", error);
    throw new Error("Error inserting data");
  } else {
    console.log("Data inserted:", data);
    return "399";
  }
}

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const price = await scrapePrice();
    res.status(200).json({ price });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
