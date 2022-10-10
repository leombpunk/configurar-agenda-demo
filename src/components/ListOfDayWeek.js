import React from "react";
import ListOfHourButton from "./ListOfHourButton";
import "./ListOfDayWeek.css";

export default function ListOfDayWeek() {
  return (
    <div className="listOfDayWeek">
      <ListOfHourButton />
      <ListOfHourButton />
      <ListOfHourButton />
      <ListOfHourButton />
      <ListOfHourButton />
      <ListOfHourButton />
      <ListOfHourButton />
    </div>
  );
}
