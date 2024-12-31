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
      const response = await fetch("/api/scrape-price");
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
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh Price"}
      </button>
      {price && <p>Current Price: {price}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default PriceScraperButton;
