import React from "react";
import Column from "../Column";
import "../global.css";
import "./HeaderBar.css";

interface HeaderBarProps {
  menus: Array<string>;
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
  handleSignup: () => void;
}

function HeaderBar({
  menus,
  isLoggedIn,
  handleLogin,
  handleLogout,
  handleSignup,
}: HeaderBarProps) {
  return (
    <div className="ugly-headerbar">
      <Column>
        <div className="ugly-headerbar--logo">LOGO</div>
        <div className="ugly-headerbar--list">
          {/* TODO: Create Link Component and replace it */}
          {menus.map((menu, index) => (
            <a key={index} className="ugly-headerbar--list-item" href="#">
              <span>{menu}</span>
            </a>
          ))}
        </div>
      </Column>
      <Column>
        {!isLoggedIn ? (
          <>
            {/* TODO: Create ButtonAsLink Component and Replace it */}
            <a className="ugly-headerbar--list-item" href="#">
              <span>Login</span>
            </a>
            <a className="ugly-headerbar--list-item primary" href="#">
              <span>Register</span>
            </a>
          </>
        ) : (
          <a className="ugly-headerbar--list-item" href="#">
            <span>Username</span>
          </a>
        )}
      </Column>
    </div>
  );
}

export default HeaderBar;
