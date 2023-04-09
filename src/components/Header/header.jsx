import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <header className={props.class}>
      <div className="title">
        <p className="todo">TODO</p>
        <button onClick={props.onclick} className="icon">
          <img src={props.sourceIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
