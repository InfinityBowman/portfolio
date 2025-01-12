"use client";

import React, { useState } from "react";

const PriceScraperButton = () => {
  const [price, setPrice] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/query-library-db", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Tokyo Scoring Strings",
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setPrice(data.price);
      } else {
        setError(data.error);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`px-2 py-1 text-sm text-white font-normal rounded-md ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        }`}
      >
        {loading ? "Refreshing..." : "Refresh Price"}
      </button>
      {price && <p className="text-sm font-normal">Current Price: {price}</p>}
      {error && <p className="text-sm text-red-500 font-normal">Error: {error}</p>}
    </>
  );
};

export default PriceScraperButton;
