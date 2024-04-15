import { useEffect, useState } from "react";

export function Usesearch(token: string, serach: string) {
  const [searchData, setsearchData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${serach}&type=album%2Cplaylist%2Ctrack`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch playlist data");
        }
        const data = await response.json();
        setsearchData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching playlist data:", error);
        setError("Error fetching playlist data. Please try again later.");
        setLoading(false);
      }
    };

    fetchPlaylistData();
  }, [token, serach]);

  return {   searchData, loading, error };
}
