import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
};

export default App;
