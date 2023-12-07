import { useEffect, useState } from "react";
import { Person } from "../Model/Person";
import { getAllPeople } from "../Services/People/getAll";

export function usePeople() {
  const [people, setPeople] = useState<Person[]>([]);
  const [arePeopleLoading, setArePeopleLoading] = useState<boolean>(false);
  const [fetchPeopleError, setFetchPeopleError] = useState<
    string | Error | any
  >(false);

  useEffect(() => {
    setArePeopleLoading(true);
    getAllPeople()
      .then((people) => {
        setPeople(people);
        setFetchPeopleError(undefined);
      })
      .catch((error) => {
        setPeople([]);
        setFetchPeopleError(error);
      })
      .finally(() => setArePeopleLoading(false));
  }, []);

  return {
    people,
    arePeopleLoading,
    fetchPeopleError,
    didPeopleFetchFailed: Boolean(fetchPeopleError),
  };
}
