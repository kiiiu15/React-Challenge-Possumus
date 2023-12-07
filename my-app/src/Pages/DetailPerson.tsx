import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";
import { PersonCard } from "../Components/PersonCard";
import { usePerson } from "../Hooks/usePerson";

export function DetailPerson() {
  const { id } = useParams();

  const { person, isPersonLoading, didPersonFetchFailed, fetchPersonError } =
    usePerson({ idPerson: id });

  return (
    <>
      <div className="container p-5 bg-light border border-dark">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5">
          {isPersonLoading ? <Loading /> : undefined}
          {didPersonFetchFailed ? (
            <p>{fetchPersonError}</p>
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
