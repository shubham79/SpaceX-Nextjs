import styles from "../../styles/Home.module.css";
import moment from "moment";
import _ from "lodash";

export default function LaunchItem({ item }) {
  return (
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
          <div className="value">{moment(item.date_utc).format("YYYY")}</div>
        </div>
        <div className="disbursal-detail d-flex flex-row ">
          <div className="name">Successful Launch:</div>
          <div className="value">
            {_.capitalize(_.get(item, "success", false))}
          </div>
        </div>
        <div className="disbursal-detail d-flex flex-row ">
          <div className="name"> Successful Landing:</div>
          <div className="value">
            {_.capitalize(_.get(item.cores, "[0].landing_success", false))}
          </div>
        </div>
      </div>
    </div>
  );
}
