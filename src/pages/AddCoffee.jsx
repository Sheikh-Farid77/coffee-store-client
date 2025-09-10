import { useState } from "react";
import Bg from "../assets/images/more/11.png";

export default function AddCoffee() {
  const [coffeeInfo, setCoffeeInfo] = useState({
    name: "",
    quantity: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  });

  const handleChange = (event) => {
    setCoffeeInfo({
      ...coffeeInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddCoffee = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffeeInfo({
          name: "",
          quantity: "",
          supplier: "",
          taste: "",
          category: "",
          details: "",
          photo: "",
        });
      });
  };
  return (
    <div
      className="w-full bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 bg-[#F4F3F0] rounded-sm">
        <h3 className="text-center text-black text-2xl font-semibold pb-3">
          Add New Coffee
        </h3>
        <p className="text-center text-black pb-3 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="space-y-6">
          {/* Two Column Layout - Responsive */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-10">
            {/* Left Column */}
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Name
                </legend>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={coffeeInfo.name}
                  className="input bg-white text-black w-full"
                  placeholder="Enter coffee name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Supplier
                </legend>
                <input
                  type="text"
                  name="supplier"
                  onChange={handleChange}
                  value={coffeeInfo.supplier}
                  className="input bg-white text-black w-full"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Category
                </legend>
                <input
                  type="text"
                  name="category"
                  onChange={handleChange}
                  value={coffeeInfo.category}
                  className="input bg-white text-black w-full"
                  placeholder="Enter coffee category"
                />
              </fieldset>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Quantity
                </legend>
                <input
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  value={coffeeInfo.quantity}
                  className="input bg-white text-black w-full"
                  placeholder="Enter quantity"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Taste
                </legend>
                <input
                  type="text"
                  name="taste"
                  onChange={handleChange}
                  value={coffeeInfo.taste}
                  className="input bg-white text-black w-full"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Details
                </legend>
                <input
                  type="text"
                  name="details"
                  onChange={handleChange}
                  value={coffeeInfo.details}
                  className="input bg-white text-black w-full"
                  placeholder="Enter coffee details"
                />
              </fieldset>
            </div>
          </div>

          {/* Full Width Field */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-800 text-lg">
                Photo URL
              </legend>
              <input
                type="text"
                name="photo"
                onChange={handleChange}
                value={coffeeInfo.photo}
                className="input bg-white text-black w-full"
                placeholder="Enter photo URL"
              />
            </fieldset>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#D2B48C] w-full py-3 text-black font-semibold mt-3 rounded-sm cursor-pointer text-lg hover:bg-[#c1a178] transition-colors"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
}
