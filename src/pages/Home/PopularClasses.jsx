import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const PopularClasses = () => {
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    console.log(courses)
  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-blue-700 font-semibold tracking-wider">
          COURSE CATEGORIES
        </h3>
        <h1 className="text-4xl font-bold py-4">Popular Topics To Learn</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 my-8">
        {
            courses.map(course=> <ClassesCard key={course.id} course={course} />)
        }
      </div>
    </div>
  );
};

export default PopularClasses;
