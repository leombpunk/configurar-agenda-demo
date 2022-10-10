import "./App.css";
import ListOfDayButton from "./components/ListOfDayButton";
import ListOfDayWeek from "./components/ListOfDayWeek";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Configuracion de Agenda</h1>
        <h3>Dias Habiles</h3>
        <ListOfDayButton />
        <h3>Franjas Horarias</h3>
        <ListOfDayWeek />
      </section>
    </div>
  );
}