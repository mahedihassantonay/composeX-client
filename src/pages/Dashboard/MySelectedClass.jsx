import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSelectedClass from "../../hooks/useSelectedClass";

const MySelectedClass = () => {
  const [courses, refetch] = useSelectedClass();
  const handleDelete = (course) => {
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
        fetch(`http://localhost:5000/selectedClasses/${course._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <div className="flex flex-col gap-12">
        {courses.map((course) => (
          <div key={course._id} className="mx-8">
            <div className="rounded-lg  bg-base-200">
              <div className="flex gap-12 justify-between items-center">
                <div className="w-2/3 p-4">
                  <h1 className="text-xl font-bold mb-4">
                    Course Name: {course.name}
                  </h1>{" "}
                  <br />
                  <img
                    src={course.image}
                    className="h-52 w-96 rounded-lg shadow-2xl"
                  />
                </div>
                <div className="w-1/3">
                  <h1 className="text-lg font-bold mb-4">
                    Instructor: <br /> {course.instructor}
                  </h1>
                  <img
                    className="h-52  rounded-lg"
                    src={course.instructorImage}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-bold">${course.price}</h1>
                <p className="py-6 text-yellow-600">
                  Available Seat: {course.seats}
                </p>
                <div className="flex justify-center gap-12">
                  <button
                    onClick={() => handleDelete(course)}
                    className="btn bg-black text-white hover:text-black"
                  >
                    Delete
                  </button>
                  <Link to='/dashboard/classpayment'>
                  <button className="btn bg-black text-white hover:text-black">
                    Pay
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MySelectedClass;
