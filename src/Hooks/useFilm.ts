import { useEffect, useState } from "react";
import { Film } from "../Model/Film";
import { getFilmById } from "../Services/Films/getById";

export function useFilm(filmId: string) {
  const [filmData, setFilmData] = useState<Film>();

  useEffect(() => {
    getFilmById(filmId).then((filmData) => setFilmData(filmData));
  }, [filmId]);

  return {
    filmData
  }
}
