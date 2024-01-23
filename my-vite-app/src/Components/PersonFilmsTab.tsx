import { Person } from "../Model/Person";
import { PersonFilmLink } from "./PersonFilmLink";

type Props = {
  person: Person;
};

export function PersonFilmsTab({person} : Props) {

  return (
    <>
      <section className="p-2 m-3">
      <p className="fs-4">Movies</p>
        <ul className="list-group">
          {person?.films?.map((film) => (
            <li className="list-group-item placeholder-glow ">
              <PersonFilmLink filmUrl={film} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
