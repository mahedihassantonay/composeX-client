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
    <div>
      <h1>Enrolled Classes</h1>
      {enrolledClasses.map((course) => (
        <div key={course._id}>
          <h2>Course Name: {course.className}</h2>
          <p>Avilable Seat: {course.availableSeats}</p>
          
          <img src={course.image} alt="" />
          {/* Add other information about the enrolled class */}
        </div>
      ))}
    </div>
  );
};

export default MyEnrolledClasses;