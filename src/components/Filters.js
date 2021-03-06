import styles from "../../styles/Home.module.css";

export default function Filters(params) {
  const yearList = Array.from({ length: 15 }, (_, i) => i + 2006);
  return (
    <div className={styles.card}>
      <p style={{ display: "flex" }}>Filters</p>
      <div style={{ borderBottom: "1px solid black", marginTop: "1rem" }}>
        Launch Year
      </div>
      <ul className="top-filter">
        {yearList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div style={{ borderBottom: "1px solid black", marginTop: "1.5rem" }}>
        Successful Launch
      </div>
      <ul className="top-filter">
        <li>True</li>
        <li>False</li>
      </ul>
      <div style={{ borderBottom: "1px solid black", marginTop: "1.5rem" }}>
        Successful Landing
      </div>
      <ul className="top-filter">
        <li>True</li>
        <li>False</li>
      </ul>
    </div>
  );
}
