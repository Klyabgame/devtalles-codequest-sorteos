import Sorteos from "./components/Sorteos";

async function getServerSideProps() {
  const res = await fetch(`/api/sorteo`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const sorteos = await res.json();

  return {
    props: {
      sorteos: sorteos.sorteoData,
    },
  };
}

export default async function Home({sorteos}) {
  return (
    <>
      {sorteos && <Sorteos sorteos={sorteos} />}
    </>
  );
}
