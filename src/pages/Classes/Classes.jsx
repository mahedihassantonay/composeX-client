import { useEffect, useState } from "react";

const Classes = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div className="grid gap-8 m-12">
      {
        courses.map(course=>(
            <div key={course.key} className="hero bg-base-200 flex flex-row">
        <div className="hero-content px-12">
          <img
            src={course.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">{course.className}</h1>
            <p className="py-6">
              Instructor: {course.instructor}
            </p>
            <p className="py-6">
              Available Seats: {course.availableSeats}
            </p>
            <p className="py-6">
              Price: ${course.price}
            </p>
            <button className="btn bg-black text-white hover:text-black">Select</button>
          </div>
        
      </div>
        ))
      }
    </div>
  );
};

export default Classes;
