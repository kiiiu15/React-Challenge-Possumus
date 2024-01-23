import { useState } from "react";
import { Person } from "../Model/Person";
import { PersonDetailsTab } from "./PersonDetailsTab";
import { PersonFilmsTab } from "./PersonFilmsTab";
import { PersonVehiclesTab } from "./PersonVehiclesTab";
import { Tabs } from "./Tabs";

interface Props {
  person: Person;
}

export function PersonTabsContainer({ person }: Props) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Tabs 
        tabs={["Details", "Films", "Vehicles"]}
        handleTabChange={(tab: number) => setCurrentTab(tab)}
      />

      <main className="container bg-secondary rounded">
        {currentTab === 0 ? <PersonDetailsTab person={person} /> : undefined}
        {currentTab === 1 ? <PersonFilmsTab person={person} /> : undefined}
        {currentTab === 2 ? <PersonVehiclesTab /> : undefined}
      </main>
    </>
  );
}
