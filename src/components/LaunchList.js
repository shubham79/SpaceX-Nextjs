import styles from "../../styles/Home.module.css";
import moment from "moment";
import _ from "lodash";

export default function LaunchList({ launches }) {
  return (
    <>
      {launches.map((item) => (
        <div className={`${styles.card} col-md-2 launch-detail`} key={item.id}>
          <div>
            <img
              src={item.links.patch.small}
              alt={item.name}
              style={{ width: "100%", background: "#ccc" }}
            />
          </div>
          <div className="d-flex flex-column">
            <div className="disbursal-detail d-flex flex-row">
              <h4>
                {item.name} #{item.flight_number}{" "}
              </h4>
            </div>
            <div className="disbursal-detail d-flex flex-row ">
              <div className="name">Launch year:</div>
              <div className="value">
                {moment(item.date_utc).format("DD/MM/YYYY")}
              </div>
            </div>
            <div className="disbursal-detail d-flex flex-row ">
              <div className="name">Successful Launch:</div>
              <div className="value">{item.success ? "True" : "False"}</div>
            </div>
            <div className="disbursal-detail d-flex flex-row ">
              <div className="name"> Successful Landing:</div>
              <div className="value">
                {_.isEmpty(_.find(item.cores, { landing_success: true }))
                  ? "False"
                  : "True"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
