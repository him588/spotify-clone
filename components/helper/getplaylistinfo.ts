export async function getplaylistinfo(token: string, id: string) {
  try {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error fetching data", error);
  }
}
