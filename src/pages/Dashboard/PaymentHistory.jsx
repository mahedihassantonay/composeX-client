import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
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
    <div className="w-full px-12">
            <h1 className="text-3xl font-bold my-12 underline">Payment History</h1>

      {enrolledClasses.map((course) => (
        <div key={course._id} className='border mb-8 font-semibold'>
          <h2>Course Name: {course.className}</h2>
          <h2>Email: {course.email}</h2>
          <p>Trans Id: {course.transactionId}</p>
          <p className="bg-yellow-500">{course.date}</p>
          <p>Paid - ${course.price}</p>
          
         
        </div>
      ))}
    </div>
  );
};

export default PaymentHistory;