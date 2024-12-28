import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import AddTask from "./pages/AddTask"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/addtask" element={<AddTask/> } />
    </Routes>
  );
}

export default App;
