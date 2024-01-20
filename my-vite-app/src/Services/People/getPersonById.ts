import axios from "axios";
import { emptyPerson, peopleEndpoint } from "../../Config/Constants";
import { Person } from "../../Model/Person";

export async function getPersonById(id: string = "0") {
  try {
    const { data: person } = await axios.get<Person>(`${peopleEndpoint}/${id}`);
    return person;
  } catch (error) {
    return emptyPerson;
  }
}
