import { Person } from "../Model/Person";
import PersonTableLine from "./PersonTableLine";

interface Props {
  people: Array<Person>;
}

export function PersonTable({ people }: Props) {
  return (
    <>
      <ul className="list-unstyled py-5 px-3">
        {people.map(({ name }, index) => (
          <PersonTableLine name={name} id={String(index + 1)} key={index} />
        ))}
      </ul>
    </>
  );
}
