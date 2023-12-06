import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";
import { PersonCard } from "../Components/PersonCard";
import { emptyPerson } from "../Config/Constants";
import { Person } from "../Model/Person";
import { getPersonById } from "../Services/People/getPersonById";

export function DetailPerson() {
  const { id } = useParams();

  const [person, setPerson] = useState<Person>(emptyPerson);

  useEffect(() => {

    if (Boolean(id)){
      getPersonById(id)
        .then((person) => setPerson(person))
        .catch(() => setPerson(emptyPerson));
    }
  }, [id]);

  return (
    <>
      <div className="container p-5 bg-light border border-dark">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5">
          {person === emptyPerson ? (
            <Loading />
          ) : (
            <>
              <h1 className="display-5 fw-bold">{person?.name}</h1>
              <PersonCard title="Details: " person={person} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
