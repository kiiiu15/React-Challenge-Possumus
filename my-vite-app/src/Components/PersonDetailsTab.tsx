import { Person } from "../Model/Person";
import { PersonCard } from "./PersonCard";

type Props = {
  person: Person;
};

export function PersonDetailsTab({person}: Props) {

  return (
    <section className="p-2 m-3">
      <PersonCard person={person} title="Details" />
    </section>
  );
}
