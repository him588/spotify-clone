import { useEffect, useState } from "react";

export function UseArtistInfo(token: string, id: string) {
  const [artistData, setartistData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${id}`,
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
        setartistData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching playlist data:", error);
        setError("Error fetching playlist data. Please try again later.");
        setLoading(false);
      }
    };

    fetchPlaylistData();
  }, [token, id]);

  return { artistData, loading, error };
}
