import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./provider/AuthProvider";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add_coffee" element={<AddCoffee />} />
          <Route path="/update_coffee/:id" element={<UpdateCoffee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
