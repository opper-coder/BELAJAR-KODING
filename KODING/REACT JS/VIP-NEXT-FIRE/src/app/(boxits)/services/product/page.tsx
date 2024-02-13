export async function getData(url: string) {
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["mark-general"],
      revalidate: 200,
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
}
