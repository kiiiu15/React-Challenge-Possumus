import { useEffect, useState } from "react";
import { Loading } from "../Components/Loading";
import { PersonTable } from "../Components/PersonTable";
import { Person } from "../Model/Person";
import { getAllPeople } from "../Services/People/getAll";

export function ListPeople() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    getAllPeople()
      .then((people) => setPeople(people))
      .catch(() => setPeople([]));
  }, []); // inital load

  return (
    <>
      <div className="container">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center bg-light border border-dark">
          {people.length ? <PersonTable people={people} /> : <Loading />}
        </div>
      </div>
    </>
  );
}
