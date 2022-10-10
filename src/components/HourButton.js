import React, { useState } from "react";
import './HourButton.css';

export default function HourButton({ hourOfDay }) {
  const [active, setActive] = useState(true);
  const btnClassName = active ? "btn-hour" : "btn-hour btn-hour-active";
  return (
    <button type="button"
      className={btnClassName}
      onClick={() => {
        setActive(!active);
      }}
    >
      {hourOfDay}
    </button>
  );
}