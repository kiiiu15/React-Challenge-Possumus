import { Outlet, Route, Routes } from "react-router-dom";
import { DetailPerson } from "../Pages/DetailPerson";
import { ListPeople } from "../Pages/ListPeople";
import { Error } from "../Pages/Error";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPeople />} />
        <Route path="/people" element={<ListPeople />} />
        <Route path="/people/:id" element={<DetailPerson />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Outlet />
    </>
  );
}
