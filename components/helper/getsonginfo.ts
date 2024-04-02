// export async function fetchsonginfo(token: string, url: string) {
//   try {
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error fetching data", error);
//   }
// }

export async function fetchsonginfo(url: string, token: string) {
  try {
    const response = await fetch(url, {
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
