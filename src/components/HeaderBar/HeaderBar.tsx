import React from "react";
import "../global.css";
import "./HeaderBar.css";

interface HeaderBarProps {
  logo: string;
  menus: Array<string>;
}

function HeaderBar({ logo, menus }: HeaderBarProps) {
  return (
    <div className="ugly-headerbar">
      <div className="ugly-headerbar--logo">{logo}</div>
      <ul className="ugly-headerbar--list">
        {menus.map((menu, index) => (
          <li key={index} className="ugly-headerbar--list-item">
            <a className="ugly-headerbar--list-item-link" href="#">
              {menu}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderBar;
