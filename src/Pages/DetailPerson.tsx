import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";
import { PersonTabsContainer } from "../Components/PersonTabsContainer";
import { usePerson } from "../Hooks/usePerson";

export function DetailPerson() {
  const { id } = useParams();

  const { person, isPersonLoading, didPersonFetchFailed, fetchPersonError } =
    usePerson({ idPerson: id });

  return (
    <>
      <div className="p-2 py-3 bg-light">
        {isPersonLoading ? (
          <Loading />
        ) : (
          <>
            {didPersonFetchFailed ? (
              <p>{fetchPersonError}</p>
            ) : (
              <>
                <h2 className="display-5 fw-bold my-3">{person?.name}</h2>
                <PersonTabsContainer person={person} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
