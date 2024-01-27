import { useEffect, useState } from "react";
import { emptyPerson } from "../Config/Constants";
import { Person } from "../Model/Person";
import { getPersonById } from "../Services/People/getPersonById";

interface Props {
  idPerson?: string;
}

export function usePerson({ idPerson }: Props) {
  const [person, setPerson] = useState<Person>(emptyPerson);
  const [isPersonLoading, setIsPersonLoading] = useState(false);

  const [fetchPersonError, setFetchPersonError] = useState<
    string | undefined | Error
  >("");

  useEffect(() => {
    if (idPerson) {
      setIsPersonLoading(true);
      getPersonById(idPerson)
        .then((person) => {
          setPerson(person);
          setFetchPersonError(undefined);
        })
        .catch((error) => {
          setPerson(emptyPerson);
          setFetchPersonError(error);
        })
        .finally(() => setIsPersonLoading(false));
    }
  }, [idPerson]);

  return {
    person,
    isPersonLoading,
    fetchPersonError,
    didPersonFetchFailed: Boolean(fetchPersonError),
  };
}
