import styles from "../../styles/Home.module.css";

export default function LaunchList({ launches }) {
  return (
    <>
      {launches.map((item) => (
        <div className={`${styles.card} col-md-2`} key={item.id}>
          {/* {item.name} */}
          <div>
            <img
              src={item.links.patch.small}
              alt={item.name}
              style={{ width: "100%", background: "#ccc" }}
            />
          </div>
          <p>{item.name}</p>
          <p>Mission Ids</p>
          <p>Launch year</p>
          <p>Successful Launch </p>
          <p>Successful Landing </p>
        </div>
      ))}
    </>
  );
}
