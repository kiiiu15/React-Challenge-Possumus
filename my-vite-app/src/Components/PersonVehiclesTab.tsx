import { Person } from "../Model/Person";
import { PersonVehicleLink } from "./PersonVehicleLink";

type Props = {
  person: Person;
};


export function PersonVehiclesTab({person}: Props) {
  return <>
    <section className="p-2 m-3">
      <p className="fs-4">Vehicles</p>
        <ul className="list-group">
          {person?.vehicles?.map((vehicle) => (
            <li className="list-group-item placeholder-glow ">
              <PersonVehicleLink vehicleUrl={vehicle} />
            </li>
          ))}
        </ul>
      </section>
  </>;
}