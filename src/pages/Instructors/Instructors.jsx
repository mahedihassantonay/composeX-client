import useCourses from "../../hooks/useCourses";

const Instructors = () => {
    const [courses] = useCourses()
    return (
        <div className="mx-12">
            <h1 className="text-3xl font-bold text-center my-12">Our Amazing Instructors</h1>
            

            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        courses.map((c,index)=>(
            <tr key={c._id}>
            <th>{index+1}</th>
            <td><img className="h-16 w-16 rounded-full" src={c.instructorImage} alt="" /></td>
            <td>{c.instructor}</td>
            <td>{c.email}</td>
            <td>
           
            </td>
            <td>
            
            </td>
         </tr>
        ))
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Instructors;