import { AppMap } from "../components/Map";
import { Dashboard } from "../components/Dashboard";
import {
  homepageContentContainer,
  homepageSectionContainer,
  pageContainer,
  homepageSectionTitle,
  homepageTitle,
} from "./HomePage.css";

export function HomePage() {
  return (
    <div className={pageContainer}>
      <h1 className={homepageTitle}>🌤️&nbsp;Another Tiny Weather App&nbsp;☔</h1>
      <div className={homepageContentContainer}>
        <div className={homepageSectionContainer}>
          <h2 className={homepageSectionTitle}>Location</h2>
          <AppMap />
        </div>
        <div className={homepageSectionContainer}>
          <h2 className={homepageSectionTitle}>Weather</h2>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
