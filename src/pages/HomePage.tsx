import { LocationSelectorForm } from "../components/LocationSelectorForm";
import { AppMap } from "../components/Map";
import { Dashboard } from "../components/Dashboard";

export function HomePage() {
  return (
    <>
      <h1>My Tiny Weather App</h1>
      <div className="content-container">
        <div className="settings-container">
          <h2>Settings</h2>
          <div className="settings-select">
            <select id="select-options" name="select-options">
              <option disabled>Select an option</option>
              <option>Select location manually</option>
              <option>Use map</option>
            </select>
          </div>
          <LocationSelectorForm />
          <AppMap />
        </div>
        <div className="data-container">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
