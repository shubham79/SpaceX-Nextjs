import Head from "next/head";
import getConfig from "next/config";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import Footer from "../components/footer";
import LaunchList from "../components/LaunchList";
import Filters from "../components/Filters";
import "../../styles/Home.module.css";

export default function Home({ launches }) {
  const { query } = useRouter();
  const initialValues = {
    launchYear: query.launch_year || "",
    successfulLaunch: query.successful_launch || "",
    successfulLanding: query.successful_landing || "",
  };
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
            <Filters initialValues={initialValues}></Filters>
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

export async function getServerSideProps(ctx) {
  const { publicRuntimeConfig } = getConfig();
  const reqUrl = `${publicRuntimeConfig.API_ENDPOINT}/launches/query`;
  const { launch_year, successful_launch, successful_landing } = ctx.query;

  const query = {};

  // Query formation logic starts below
  if (launch_year) {
    const previousYear = parseInt(launch_year);
    const currentYear = parseInt(launch_year) + 1;
    query["date_utc"] = {
      $gte: moment(previousYear.toString()).toISOString(),
      $lte: moment(currentYear.toString()).toISOString(),
    };
  }
  if (successful_launch) {
    query["success"] = successful_launch === "true";
  }
  if (successful_landing) {
    query["cores.0.landing_success"] = successful_landing === "true";
  }
  // Query formation logic ends

  const payload = {
    query,
    options: {
      limit: 8,
      sort: {
        flight_number: "asc",
      },
    },
  };
  console.log("payload", payload);
  const res = await axios.post(reqUrl, payload);
  const launches = res.data;

  if (!launches) {
    return {
      notFound: true,
    };
  }

  console.log("launches", launches);

  return {
    props: { launches: launches.docs }, // will be passed to the page component as props
  };
}
