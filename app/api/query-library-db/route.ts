import { NextRequest, NextResponse } from "next/server";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import puppeteer from "puppeteer";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

async function scrapePrice(): Promise<string> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://impactsoundworks.com/product/tokyo-scoring-strings/");

  const priceSelector: string = ".price";
  const priceText: string = await page.$eval(priceSelector, (el: Element) => (el as HTMLElement).innerText);

  await browser.close();

  // Extract all numbers from the priceText
  const prices = priceText.match(/\d+(\.\d+)?/g)?.map(Number);
  if (!prices || prices.length === 0) {
    throw new Error("No prices found in the text");
  }
  console.log(prices);
  // Find the lowest price
  const lowestPrice = Math.min(...prices);
  console.log(lowestPrice);
  return lowestPrice.toString();
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  try {
    const price = await scrapePrice();

    const { data, error } = await supabase
      .from("prices")
      .upsert([{ name, price, checked_at: new Date().toISOString() }], { onConflict: "name" });

    if (error) {
      console.error("Error inserting data:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
