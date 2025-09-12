import { useEffect, useState } from "react";
import DeleteIcon from "../components/svg/DeleteIcon";
import EditIcon from "../components/svg/EditIcon";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function Users() {
  const [users, setUsers] = useState([]);

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });

        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }

      const filtered = users.filter(user => user._id !== id);
      setUsers([
        ...filtered
      ])
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="overflow-x-auto container mx-auto my-10 px-4">
      <h2 className="text-3xl text-center font-bold mb-6 text-gray-300">
        All Users List
      </h2>

      <div className="rounded-2xl shadow-lg border border-gray-200 bg-white">
        <table className="table w-full">
          {/* head */}
          <thead className="text-gray-700 text-sm">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-blue-50 transition duration-200"
              >
                <td className="p-3 font-medium text-gray-700">{index + 1}</td>
                <td className="p-3 text-gray-800">{user.name}</td>
                <td className="p-3 text-gray-600">{user.email}</td>
                <td className="p-3 flex justify-center items-center gap-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition cursor-pointer"
                  >
                    <DeleteIcon />
                  </button>
                  <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition cursor-pointer">
                    <EditIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
