import { createClient } from "@/utils/supabase/server";

export interface Company {
  id: number;
  companyName: string;
  votes: number;
}

export const fetchVotes = async (): Promise<Company[]> => {
  const supabase = await createClient();

  const { data: companyVotes, error } = await supabase
    .from<Company["companyName"], Company["votes"]>("companyVotes")
    .select("id, companyName, votes");

  if (error) {
    console.error("Error fetching votes:", error);
    return [];
  }

  console.log("Fetched votes data:", companyVotes);
  return companyVotes;
};
