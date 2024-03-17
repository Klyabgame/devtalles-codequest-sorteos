import { Suspense, useContext } from "react";
import ListaSorteos from "./components/ListaSorteos";
import Loading from "../loading";
import { Page404 } from "../components/Page404";

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

export default async function Dashboard({sorteos}) {
  const renderDontUser = () => <Page404 />;
  return (
    <div>
      <>
        <Suspense fallback={<Loading />}>
          <div className="w-full">
          {sorteos && <ListaSorteos sorteos={sorteos} />}
          </div>
        </Suspense>
      </>
    </div>
  );
}
