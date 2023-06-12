import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyClasses = () => {
    const {user} = useAuth()
    const [classes, setClasses] = useState([]);
    const [activeButton, setActiveButton] = useState("pending"); // Add activeButton state


    useEffect(() => {
        if (user?.email) {
          fetch(`http://localhost:5000/classes/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              setClasses(data);
            })
            .catch((error) => {
              console.error("Error retrieving classes:", error);
            });
        }
      }, [user]);

      const handleStatusChange = (classId, newStatus) => {
        // Update the status of the class with the given classId
        setClasses((prevClasses) =>
          prevClasses.map((c) =>
            c._id === classId ? { ...c, status: newStatus } : c
          )
        );

        setActiveButton(newStatus);

      };

    return (
        
    <div className="w-full text-center px-12">
      <h1 className="text-3xl font-bold my-8">My Classes</h1>
      <div className="grid grid-cols-2 gap-12">
        {
            classes.map(c=> (
                <div key={c._id} className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={c.image} alt="Shoes" className="rounded-xl h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{c.className}</h2>
    <p>Total Enrolled Stident :  0</p>

    {c.status === "denied" && (
                <p className="text-red-500">
                  For some technical problem, we are unable to take the class
                </p>
              )}
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
                    c.status === "approved" ? "bg-green-500 text-white" : "btn-outline"
                  }`}
                  onClick={() => handleStatusChange(c._id, "approved")}
                >
                  Approved
                </button>
                <button
                  className={`btn btn-sm ${
                    c.status === "denied" ? "bg-red-500 text-white" : "btn-outline"
                  }`}
                  onClick={() => handleStatusChange(c._id, "denied")}
                >
                  Denied
                </button>
                <button className="btn btn-sm btn-outline">Update</button>
              </div>
  </div>
</div>
            ))
        }
      </div>
      </div>
    );
  };
  
export default MyClasses;