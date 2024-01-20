import { useLocation } from "react-router-dom";
import { PersonCard } from "./PersonCard";
import { Person } from "../Model/Person";

export function PersonDetailsTab() {
  const { state } : any = useLocation();


  const person = state?.person as Person;
  return (
    <section className="p-2 m-3">
      <PersonCard person={person} title="Details" />
    </section>
  );
}
