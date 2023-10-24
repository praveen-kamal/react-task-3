import logo from "./logo.svg";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

function App() {
  const colors = [
    "#ff99c8",
    "#fcf6bd",
    "#d0f4de",
    "#a9def9",
    "#e4c1f9",
    "#f72585",
    "#7209b7",
    "#3a0ca3",
    "#ff7900",
    "#f94144",
    "#0b090a",
    "#8ac926",
  ];
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
