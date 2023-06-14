import { useEffect, useState } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [activeButton, setActiveButton] = useState("pending");

  useEffect(() => {
    fetch("https://server2-sepia-nine.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.error("Error retrieving classes:", error);
      });
  }, []);

  const handleStatusChange = (classId, newStatus) => {
    setClasses((prevClasses) =>
      prevClasses.map((c) =>
        c._id === classId ? { ...c, status: newStatus } : c
      )
    );
    setActiveButton(newStatus);
  };

  return (
    <div className="w-full text-center px-12">
      <h1 className="text-3xl font-bold my-8">Manage Classes</h1>
      <div className="grid grid-cols-2 gap-12">
        {classes.map((c) => (
          <div key={c._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={c.image} alt="Class" className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{c.className}</h2>
              <p>Instructor: {c.instructor}</p>
              <p>Email: {c.email}</p>
              <p>Available Seats: {c.availableSeats}</p>
              <p>Price: {c.price}</p>
              <p>Status: {c.status}</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={`btn btn-sm ${
                    activeButton === "pending" ? "bg-yellow-400" : "btn-outline"
                  }`}
                  onClick={() => handleStatusChange(c._id, "pending")}
                >
                  Pending
                </button>
                <button
                  className={`btn btn-sm ${
                    c.status === "approved"
                      ? "bg-green-500 text-white"
                      : "btn-outline"
                  }`}
                  onClick={() => handleStatusChange(c._id, "approved")}
                  disabled={c.status !== "pending"}
                >
                  Approve
                </button>
                <button
                  className={`btn btn-sm ${
                    c.status === "denied"
                      ? "bg-red-500 text-white"
                      : "btn-outline"
                  }`}
                  onClick={() => handleStatusChange(c._id, "denied")}
                  disabled={c.status !== "pending"}
                >
                  Deny
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  disabled={c.status !== "approved" && c.status !== "denied"}
                >
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
