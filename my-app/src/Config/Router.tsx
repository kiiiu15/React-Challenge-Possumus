import { Routes, Route, Outlet } from "react-router-dom";
import DetailPerson from "../Hooks/DetailPerson";
import ListPeople from "../Hooks/ListPeople";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={< ListPeople />} />

                <Route path="people" element={< ListPeople />} >
                    <Route path=":id" element={<DetailPerson />} />
                </Route>


                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Oops! 404 Not Found!</p>
                        </main>
                    } />
            </Routes>
            <Outlet />
        </>
    );
};