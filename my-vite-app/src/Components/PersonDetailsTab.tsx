import { Person } from "../Model/Person";
import { PersonCard } from "./PersonCard";

type Props = {
  person: Person;
};

export function PersonDetailsTab({person}: Props) {

  return (
    <section className="p-2 m-3">
      <p className="fs-4">Details</p>
      <PersonCard person={person} />
    </section>
  );
}
