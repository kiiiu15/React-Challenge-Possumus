import { Outlet, Route, Routes } from "react-router-dom";
import { PersonDetailsTab } from "../Components/PersonDetailsTab";
import { PersonMoviesTab } from "../Components/PersonMoviesTab";
import { PersonVehiclesTab } from "../Components/PersonVehiclesTab";
import { DetailPerson } from "../Pages/DetailPerson";
import { Error } from "../Pages/Error";
import { ListPeople } from "../Pages/ListPeople";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPeople />} />
        <Route path="/people" element={<ListPeople />} />
        <Route path="/people/:id" element={<DetailPerson />}>
          <Route path="details" element={<PersonDetailsTab />} />
          <Route path="movies" element={<PersonMoviesTab />} />
          <Route path="vehicles" element={<PersonVehiclesTab />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Outlet />
    </>
  );
}
