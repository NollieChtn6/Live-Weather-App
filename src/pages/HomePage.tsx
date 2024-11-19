import { AppMap } from "../components/Map";
import { Dashboard } from "../components/Dashboard";

export function HomePage() {
  return (
    <>
      <h1>My Tiny Weather App</h1>
      <div className="content-container">
        <div className="settings-container">
          <h2>Location</h2>
          <AppMap />
        </div>
        <div className="data-container">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
