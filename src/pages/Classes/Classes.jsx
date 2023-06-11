import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const {user} = useAuth()
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:5000/selectedClasses?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const selectedCourseIds = data.map((course) => course.classId);
          setSelectedCourses(selectedCourseIds);
        });
    }
  }, [user]);


  const handleSelectedClass = course =>{
    console.log(course)
    if(user && user.email){
      const selectedClass={classId: course._id, price: course.price, image: course.image,  instructor: course.instructor, name: course.className , email: user?.email }
      fetch('http://localhost:5000/selectedClasses',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify(selectedClass)

    })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          alert('added suiccesfully')
          setSelectedCourses([...selectedCourses, course._id]);

        }else{
          navigate('/login', {state: {from: location}})
        }
      })

    }
  }
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
            {selectedCourses.includes(course._id) ? (
              <button className="btn bg-gray-400 text-white cursor-not-allowed" disabled>
                Selected
              </button>
            ) : (
              <Link to="/dashboard/selectedclass">
                <button
                  onClick={() => handleSelectedClass(course)}
                  className="btn bg-black text-white hover:text-black"
                >
                  Select
                </button>
              </Link>
            )}
          </div>
        
      </div>
        ))
      }
    </div>
  );
};

export default Classes;
