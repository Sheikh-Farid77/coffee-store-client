import { useEffect, useState } from "react";
import Coffee from "./Coffee";
import { Link } from "react-router";
import Bg from "../assets/images/more/1.png";

export default function AllProducts() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <div
      className="w-full bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Header Section */}
      <div className="text-center mt-10 space-y-2 px-4">
        <p className="text-sm sm:text-base">Sip & Savor</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Our Popular Products
        </h1>
        <Link to="/add_coffee">
          <button className="bg-[#E3B577] text-base sm:text-lg border px-4 sm:px-6 py-2 text-black font-semibold mt-2 cursor-pointer rounded-sm hover:bg-amber-400">
            Add Coffee
          </button>
        </Link>
      </div>

      {/* Coffee Cards Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
