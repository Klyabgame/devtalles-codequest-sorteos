import Sorteos from "./components/Sorteos";

async function getSorteosList() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/sorteo`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    next: {
      revalidate: 0,
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const sorteos = await getSorteosList();

  return (
    <>
      <Sorteos sorteos={sorteos.sorteoData} />
    </>
  );
}