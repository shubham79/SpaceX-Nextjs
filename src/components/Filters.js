import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Filters({ initialValues }) {
  const yearList = Array.from({ length: 15 }, (_, i) => i + 2006);
  console.log("initialValues", initialValues);

  const router = useRouter();

  const [launchYear, setLaunchYear] = useState(initialValues.launchYear);
  const [successfulLaunch, setsuccessfulLaunch] = useState(
    initialValues.successfulLaunch
  );
  const [successfulLanding, setsuccessfulLanding] = useState(
    initialValues.successfulLanding
  );
  function applyFilter(type, value) {
    if (type === "launchYear") {
      setLaunchYear(value);
    }
    if (type === "successfulLaunch") {
      setsuccessfulLaunch(value);
    }
    if (type === "successfulLanding") {
      setsuccessfulLanding(value);
    }
  }

  useEffect(() => {
    if (launchYear || successfulLanding || successfulLaunch)
      router.push(
        {
          pathname: "/",
          query: {
            launch_year: launchYear,
            successful_launch: successfulLaunch,
            successful_landing: successfulLanding,
          },
        },
        undefined,
        { shallow: false }
      );
  }, [launchYear, successfulLaunch, successfulLanding]);

  return (
    <div className={styles.card}>
      <p style={{ display: "flex" }}>Filters</p>
      <div style={{ borderBottom: "1px solid black", marginTop: "1rem" }}>
        Launch Year
      </div>
      <ul className="top-filter">
        {yearList.map((item, index) => (
          <li
            key={`${item}${index}`}
            className={`${launchYear === item.toString() ? "active" : ""}`}
            onClick={() => applyFilter("launchYear", item.toString())}
          >
            {item}
          </li>
        ))}
      </ul>
      <div style={{ borderBottom: "1px solid black", marginTop: "1.5rem" }}>
        Successful Launch
      </div>
      <ul className="top-filter">
        <li
          className={`${successfulLaunch === "true" ? "active" : ""}`}
          onClick={() => applyFilter("successfulLaunch", "true")}
        >
          True
        </li>
        <li
          className={`${successfulLaunch === "false" ? "active" : ""}`}
          onClick={() => applyFilter("successfulLaunch", "false")}
        >
          False
        </li>
      </ul>
      <div style={{ borderBottom: "1px solid black", marginTop: "1.5rem" }}>
        Successful Landing
      </div>
      <ul className="top-filter">
        <li
          className={`${successfulLanding === "true" ? "active" : ""}`}
          onClick={() => applyFilter("successfulLanding", "true")}
        >
          True
        </li>
        <li
          className={`${successfulLanding === "false" ? "active" : ""}`}
          onClick={() => applyFilter("successfulLanding", "false")}
        >
          False
        </li>
      </ul>
    </div>
  );
}
