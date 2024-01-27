import { Link } from "react-router-dom";
import { useFilm } from "../Hooks/useFilm";

type Props = {
  filmUrl: string;
};
export function PersonFilmLink({ filmUrl }: Props) {
  const filmId = filmUrl.split("/")[5];
  const { filmData } = useFilm(filmId);

  return (
    <>
      <Link
        className={`link-underline-opacity-0 ${
          filmData?.title ? "" : "placeholder bg-secondary col-12"
        }`}
        to={""}
      >
        {filmData?.title}
      </Link>
    </>
  );
}
