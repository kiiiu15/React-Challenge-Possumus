import {Person} from "../Model/Person";

export function PersonCard({
  title,
  person,
}: {
  person: Person;
  title: string;
}) {
  const {
    eye_color,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    skin_color,
    species = ["n/a"],
    starships,
    vehicles,
  } = person;

  return (
    <>
      <p className="fs-2">{title}</p>
      <ul className="list-unstyled col-md-8 fs-4 d-flex flex-column flex-wrap">
        <li>{`Eye color: ${eye_color}`}</li>
        <li>{`Films: ${films.length}`}</li>
        <li>{`Gender: ${gender}`}</li>
        <li>{`Hair color: ${hair_color}`}</li>
        <li>{`Heigth: ${height} cm`}</li>
        <li>{`Homeworld: Planet ${homeworld.split("/")[5]}`}</li>
        <li>{`Mass: ${mass} kg`}</li>
        <li>{`Skin: ${skin_color}`}</li>
        <li>{`Species: ${species.length}`}</li>
        <li>{`Startships: ${starships.length}`}</li>
        <li>{`Vehicles: ${vehicles.length}`}</li>
      </ul>
    </>
  );
}
