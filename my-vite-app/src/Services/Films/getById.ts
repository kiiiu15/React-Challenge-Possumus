import axios from "axios";
import { filmsEndpoint } from "../../Config/Constants";
import { Film } from "../../Model/Film";

export async function getFilmById(id: string) {
  return axios
    .get<Film>(filmsEndpoint + "/" + id)
    .then((response) => response.data);
}
