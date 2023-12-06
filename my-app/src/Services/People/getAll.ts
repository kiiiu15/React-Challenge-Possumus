import axios from "axios";
import { peopleEndpoint } from "../../Config/Constants";
import { Person } from "../../Model/Person";

interface ApiResponse {
  results: Array<Person>;
}

export async function getAllPeople() {
  try {
    const { data } = await axios.get<ApiResponse>(peopleEndpoint);
    const { results } = data;
    return results;
  } catch (error) {
    return [];
  }
}
