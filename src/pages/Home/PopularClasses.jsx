import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import { Fade, Slide  } from "react-awesome-reveal";

const PopularClasses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div className="my-20">
      <div className="text-center">
        <Slide>
          <h3 className="text-yellow-600 font-semibold tracking-wider">
            COURSE CATEGORIES
          </h3>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1} className='text-4xl font-bold py-4'>
          Popular Topics To Learn
        </Fade>
      </div>

      <div className="grid grid-cols-3 gap-4 my-8">
        {courses.map((course) => (
          <ClassesCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
