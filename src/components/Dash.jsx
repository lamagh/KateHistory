import React from "react";

function Dash({ year, barClass, isShort, dashClassname }) {
  return (
    <div className="year_li ">
      <li className="year_li fw-bold fs6">
        <span>{year}</span>
        <div className={isShort ? "year_bar_short" : "year_bar_long"}></div>
      </li>
    </div>
  );
}

export default Dash;
