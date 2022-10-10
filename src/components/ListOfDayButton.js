import React from "react";
import DayButton from "./DayButton";
import './ListOfDayButton.css'

export default function ListOfDayButton() {
  return (
    <div className="listOfDay">
      <DayButton dayOfWeek="Domingo" />
      <DayButton dayOfWeek="Lunes" />
      <DayButton dayOfWeek="Martes" />
      <DayButton dayOfWeek="Miercoles" />
      <DayButton dayOfWeek="Jueves" />
      <DayButton dayOfWeek="Viernes" />
      <DayButton dayOfWeek="Sabado" />
    </div>
  );
}
