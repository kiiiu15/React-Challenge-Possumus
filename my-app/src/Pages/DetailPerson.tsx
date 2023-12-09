import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";
import { usePerson } from "../Hooks/usePerson";
import { PersonTabsContainer } from "../Components/PersonTabsContainer";

export function DetailPerson() {
  const { id } = useParams();

  const { person, isPersonLoading, didPersonFetchFailed, fetchPersonError } =
    usePerson({ idPerson: id });

  return (
    <>
      <div className="container p-2 bg-light border border-dark rounded">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5">
          {isPersonLoading ? (
            <Loading />
          ) : (
            <>
              {didPersonFetchFailed ? (
                <p>{fetchPersonError}</p>
              ) : (
                <>
                  <h2 className="display-5 fw-bold my-4">{person?.name}</h2>
                  <PersonTabsContainer person={person} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
