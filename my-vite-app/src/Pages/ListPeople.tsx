import { Loading } from "../Components/Loading";
import { PersonTable } from "../Components/PersonTable";
import { usePeople } from "../Hooks/usePeople";

export function ListPeople() {
  const { people, arePeopleLoading, didPeopleFetchFailed, fetchPeopleError } =
    usePeople();
  return (
    <>
      <div className="p-2 py-3 bg-light">
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
    </>
  );
}
