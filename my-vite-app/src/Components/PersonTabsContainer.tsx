import { useState } from "react";
import { Person } from "../Model/Person";
import { PersonDetailsTab } from "./PersonDetailsTab";
import { PersonFilmsTab } from "./PersonFilmsTab";
import { PersonVehiclesTab } from "./PersonVehiclesTab";

interface Props {
  person: Person;
}

export function PersonTabsContainer({ person }: Props) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <ul className="nav nav-tabs">
        <li
          className="nav-item" 
          onClick={() => setCurrentTab(0)}
        >
          <span role="button" className={`nav-link ${currentTab === 0 ? "active" : ""}`}>Details</span>
        </li>
        <li
          className="nav-item" 
          onClick={() => setCurrentTab(1)}
        >
          <span role="button" className={`nav-link ${currentTab === 1 ? "active" : ""}`}>Movies</span>
        </li>
        <li
          className="nav-item" 
          onClick={() => setCurrentTab(2)}
        >
          <span role="button" className={`nav-link ${currentTab === 2 ? "active" : ""}`}>Vehicles</span>
        </li>
      </ul>

      <main className="container bg-secondary rounded">
        {currentTab === 0 ? <PersonDetailsTab person={person} /> : undefined}
        {currentTab === 1 ? <PersonFilmsTab person={person} /> : undefined}
        {currentTab === 2 ? <PersonVehiclesTab /> : undefined}
      </main>
    </>
  );
}
