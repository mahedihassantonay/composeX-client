import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyEnrolledClasses = () => {
    const { user } = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    // Fetch enrolled classes after payment is completed
    axiosSecure.get(`/enrolledClasses/${user.email}`).then((res) => {
      setEnrolledClasses(res.data);
    });
  }, [axiosSecure, user.email]);

  return (
    <div className="px-12">
      <h1 className="text-3xl font-bold my-12 underline">My Enrolled Classes</h1>
      {enrolledClasses.map((course) => (
       <div key={course._id} className="hero  bg-base-200 mb-8">
       <div className="hero-content flex-col lg:flex-row-reverse">
         <img src={course.image} className="max-w-sm rounded-lg shadow-2xl" />
         <div>
           <h1 className="text-5xl font-bold">{course.className}</h1>
           <p className="py-6"><span className="font-bold">Instructor:</span> {course.instructor} </p>
           <button className="btn bg-black text-white hover:text-black"> Start</button>
         </div>
       </div>
     </div>
      ))}
    </div>
  );
};

export default MyEnrolledClasses;