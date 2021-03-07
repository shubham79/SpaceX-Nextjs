import LaunchItem from "./LaunchItem";

export default function LaunchList({ launches }) {
  return (
    <>
      {launches.length === 0 && (
        <p>Sorry no matches found to selected filters! Try updating them</p>
      )}
      {launches.map((item) => (
        <LaunchItem item={item}></LaunchItem>
      ))}
    </>
  );
}
