import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./HomePage";
import Tasbeh from "./Components/Tasbeh";
import Quron from "./Components/Quron";
import QuranText from "./Components/QuranText";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasbeh" element={<Tasbeh/>}/>
      <Route path="/quron" element={<Quron/>}/>
      <Route path="/quron/:id" element={<QuranText/>}/>

    </Routes>

);
}

export default App;
