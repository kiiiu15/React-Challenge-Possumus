import { Person } from "../Model/Person";
import PersonTableLine from "./PersonTableLine";

interface Props {
  people: Array<Person>;
}

export function PersonTable({ people }: Props) {
  return (
    <>
      <table className="table table-dark py-5 px-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <PersonTableLine {...person} id={String(index + 1)} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}
