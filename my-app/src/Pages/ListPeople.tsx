import { Loading } from "../Components/Loading";
import { PersonTable } from "../Components/PersonTable";
import { usePeople } from "../Hooks/usePeople";

export function ListPeople() {
  const { people, arePeopleLoading, didPeopleFetchFailed, fetchPeopleError } =
    usePeople();
  return (
    <>
      <div className="container">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center bg-light border border-dark">
          {arePeopleLoading ? (
            <Loading />
          ) : (
            <>
              {didPeopleFetchFailed ? (
                <p>{fetchPeopleError}</p>
              ) : (
                <PersonTable people={people} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
