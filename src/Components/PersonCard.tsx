import { Person } from "../Model/Person";


interface Props {
  person: Person;
}

export function PersonCard({
  person,
}: Props) {

  const {
    eye_color,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    skin_color,
    species = ["n/a"]
  } = person;

  return (
    <>
      <div className="card container-fluid">
        <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <td>Eye color</td>
                  <td>{eye_color}</td>
                </tr>
                <tr>
                  <td>Films</td>
                  <td>{films.length}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td>Hair color</td>
                  <td>{hair_color}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{`${height} cm`}</td>
                </tr>
                <tr>
                  <td>Homeworld</td>
                  <td>{`Planet ${homeworld.split("/")[5]}`}</td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>{`${mass} kg`}</td>
                </tr>
                <tr>
                  <td>Skin</td>
                  <td>{skin_color}</td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{species.length}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
}
