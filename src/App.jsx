import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { TabsDemo } from "./components/main/Tabs";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route
          path="/timeline"
          element={
            <div className="h-screen relative w-full bg-black ">
              <TabsDemo />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
