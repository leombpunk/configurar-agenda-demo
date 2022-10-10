import React, { useState } from "react";
import "./DayButton.css";

export default function DayButton({ dayOfWeek }) {
  //a los dias de la semana se le podria agregar un onject al estado
  //con los valores que me interesan, ej.: si esta activo, el dia, etc.
  const [active, setActive] = useState(true);
  const btnClassName = active ? "btn-week" : "btn-week btn-week-active";
  return (
    <button type="button"
      className={btnClassName}
      onClick={() => {
        setActive(!active);
      }}
    >
      {dayOfWeek}
    </button>
  );
}
