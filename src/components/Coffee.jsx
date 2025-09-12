import DeleteIcon from "./svg/DeleteIcon";
import EditIcon from "./svg/EditIcon";
import ViewIcon from "./svg/ViewIcon";

export default function Coffee({ coffee }) {
  return (
    <div className="bg-[#F4F3F0] rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 sm:p-6 w-full max-w-2xl mx-auto">
      {/* Coffee Image */}
      <div className="flex-shrink-0">
        <img
          src={coffee.photo}
          alt="Coffee Cup"
          className="w-24 h-24 sm:w-28 sm:h-28 object-contain mx-auto"
        />
      </div>

      {/* Coffee Details */}
      <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
        <p className="text-base sm:text-lg font-semibold text-gray-700">
          <span className="font-bold">Name:</span> {coffee.name}
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-bold">Chef:</span> {coffee.supplier}
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-bold">Price:</span> 890 Taka
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row sm:flex-col gap-3 mt-4 sm:mt-0 sm:ml-6">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded cursor-pointer">
          <ViewIcon />
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 cursor-pointer text-white p-2 rounded">
          <EditIcon />
        </button>
        <button className="bg-red-600 hover:bg-red-700 cursor-pointer text-white p-2 rounded">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
