export async function fetchTest() {
  try {
    // Artificially delay a response for testing.

    console.log("Fetching test data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Data fetch completed after 3 seconds.");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch test data.");
  }
}
