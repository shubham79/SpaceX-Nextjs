import Head from "next/head";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import styles from "../../styles/Home.module.css";
import Footer from "../components/footer";
import LaunchList from "../components/LaunchList";
import Filters from "../components/Filters";
import "../../styles/Home.module.css";

export default function Home({ launches }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space X Launch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>SpaceX Launch Programs</h1>

        <div className={styles.grid}>
          <div className="col-sm-12 col-md-2">
            <Filters></Filters>
          </div>
          <div className="col-sm-12 col-md-10 flex-list">
            <LaunchList launches={launches}></LaunchList>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const { publicRuntimeConfig } = getConfig();
  console.log("publicRuntimeConfig", publicRuntimeConfig);
  const reqUrl = `${publicRuntimeConfig.API_ENDPOINT}/launches/query`;
  const payload = {
    query: {},
    options: {
      limit: 8,
      sort: {
        flight_number: "asc",
      },
    },
  };
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
  };
  const res = await fetch(reqUrl, options);
  const launches = await res.json();
  return { launches: launches.docs.splice(0, 8) };
};
