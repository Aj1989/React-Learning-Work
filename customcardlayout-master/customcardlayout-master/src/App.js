import "./App.css";
import ComponentsImage from "./asset/images/header/components.png";
import stateImage from "./asset/images/header/state.png";
import eventsImage from "./asset/images/header/events.png";
import MenuCardComponent from "./components/MenuCardComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const concepts = [
    {
      title: "Classes",
      image: ComponentsImage,
      description:
        "NURSERY TO 8TH ALL SUBJECTS AND 9TH & 10TH STATE & CBSE MATHS",
    },
    {
      title: "ABACUS",
      image: stateImage,
      description:
        "BRAIN DEVELOPMENT ALL LEVELS",
    },
    {
      title: "SUMMER BATCH",
      image: eventsImage,
      description:
        "READING, WRITING, PHONIC, CURSIVE WRITING, COMMUNICATION",
    },
  ];
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MenuCardComponent
        className="concept"
        data={concepts}
      ></MenuCardComponent>
    </div>
  );
}

export default App;
