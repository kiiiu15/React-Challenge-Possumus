import { useState } from "react";

type Props = {
  tabs: string[];
  handleTabChange: (tab: number) => void;
};

export function Tabs({ tabs, handleTabChange }: Props) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <>
            <li
              className="nav-item"
              onClick={() => {
                setCurrentTab(index);
                handleTabChange(index);
              }}
            >
              <span
                role="button"
                className={`nav-link ${currentTab === index ? "active" : ""}`}
              >
                {tab}
              </span>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
