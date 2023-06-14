import { useQuery } from "@tanstack/react-query";
import { AiFillDelete, AiOutlineUserAdd } from "react-icons/ai";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://server2-sepia-nine.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://server2-sepia-nine.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          alert("user updated");
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(
      `https://server2-sepia-nine.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          alert("user updated");
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold">Total Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost text-white bg-yellow-600 btn-lg"
                    >
                      <AiOutlineUserAdd size={24} />
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost text-white bg-yellow-600 btn-lg"
                    >
                      <AiOutlineUserAdd size={24} />
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
