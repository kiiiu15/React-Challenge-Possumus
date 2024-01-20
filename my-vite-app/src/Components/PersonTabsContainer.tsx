import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Person } from "../Model/Person";

interface Props {
  person: Partial<Person>;
}

export function PersonTabsContainer({ person }: Props) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${currentTab === 0 ? "active" : ""}`.trim()}
            aria-current="page"
            to={"details"}
            onClick={() => setCurrentTab(0)}
            state={{person}}
          >
            Details
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${currentTab === 1 ? "active" : ""}`.trim()}
            aria-current="page"
            to={"movies"}
            onClick={() => setCurrentTab(1)}
            state={{person}}
          >
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${currentTab === 2 ? "active" : ""}`.trim()}
            aria-current="page"
            to={"vehicles"}
            onClick={() => setCurrentTab(2)}
            state={{person}}
          >
            Vehicles
          </Link>
        </li>
      </ul>

      <main className="container bg-secondary rounded">
        <Outlet />
      </main>
    </>
  );
}
