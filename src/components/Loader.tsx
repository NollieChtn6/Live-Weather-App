import { InfinitySpin } from "react-loader-spinner";
import { colors } from "../variables.css";
import { loader } from "./Loader.css";

export function Loader() {
  return (
    <div className={loader}>
      <InfinitySpin width="100" color={colors.accent} />
      <p>Loading weather data...</p>
    </div>
  );
}
