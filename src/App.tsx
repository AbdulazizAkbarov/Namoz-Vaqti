import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./HomePage";
import Tasbeh from "./Components/Tasbeh";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasbeh" element={<Tasbeh/>}/>
    </Routes>

);
}

export default App;
