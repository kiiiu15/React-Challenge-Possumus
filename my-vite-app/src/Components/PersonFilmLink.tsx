import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Film } from "../Model/Film";
import { getFilmById } from "../Services/Films/getById";

type Props = {
  filmUrl: string;
};
export function PersonFilmLink({ filmUrl }: Props) {
  const [filmData, setFilmData] = useState<Film>();

  useEffect(() => {
    const filmId = filmUrl.split("/")[5];

    getFilmById(filmId).then((filmData) => setFilmData(filmData));
  }, [filmUrl]);

  return (
    <>
      <Link className={`link-underline-opacity-0 ${(filmData?.title) ? "" : "placeholder bg-secondary col-12"}`} to={""}>{filmData?.title}</Link>
    </>
  );
}
