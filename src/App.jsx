import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add_coffee" element={<AddCoffee />} />
        <Route path="/update_coffee" element={<UpdateCoffee />} />
      </Routes>
    </div>
  );
}

export default App;
