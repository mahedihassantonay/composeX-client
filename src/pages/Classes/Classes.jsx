import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useCourses from "../../hooks/useCourses";
import useInstructor from "../../hooks/useInstructor";

const Classes = () => {
  const [courses] = useCourses();
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user && user.email) {
      fetch(
        `https://server2-sepia-nine.vercel.app/selectedClasses?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          const selectedCourseIds = data.map((course) => course.classId);
          setSelectedCourses(selectedCourseIds);
        });
    }
  }, [user]);

  const handleSelectedClass = (course) => {
    console.log(course);
    if (user && user.email) {
      const selectedClass = {
        classId: course._id,
        price: course.price,
        image: course.image,
        instructor: course.instructor,
        name: course.className,
        email: user?.email,
        instructorImage: course.instructorImage,
        seats: course.availableSeats,
      };
      fetch("https://server2-sepia-nine.vercel.app/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("added successfully");
            setSelectedCourses([...selectedCourses, course._id]);
          } else {
            navigate("/login", { state: { from: location } });
          }
        });
    }
  };
  return (
    <div className="grid gap-8 m-12">
      {courses.map((course) => (
        <div
          key={course.key}
          className={`hero bg-base-200 flex flex-row ${
            course.availableSeats === "0" ? "bg-red-500" : ""
          }`}
        >
          <div className="hero-content px-12">
            <img
              src={course.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">{course.className}</h1>
            <p className="py-6">Instructor: {course.instructor}</p>
            <p className="py-6">Available Seats: {course.availableSeats}</p>
            <p className="py-6">Price: ${course.price}</p>
            {selectedCourses.includes(course._id) ? (
              <button
                className="btn bg-gray-400 text-white cursor-not-allowed"
                disabled
              >
                Selected
              </button>
            ) : (
              <Link to="/dashboard/selectedclass">
                <button
                  onClick={() => handleSelectedClass(course)}
                  className={`btn bg-black text-white ${
                    course.availableSeats === 0 || isAdmin || isInstructor
                      ? "cursor-not-allowed"
                      : "hover:text-black"
                  }`}
                  disabled={
                    course.availableSeats === 0 || isAdmin || isInstructor
                  }
                >
                  {course.availableSeats === 0
                    ? "No Seats Available"
                    : "Select"}
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
