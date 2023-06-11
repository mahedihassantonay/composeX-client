import useSelectedClass from "../../hooks/useSelectedClass";

const MySelectedClass = () => {
    const [course, refetch] = useSelectedClass()
    const handleDelete = course =>{
        
    }
    return (
        <>
        <div className="flex flex-col gap-12">
            {
                course.map(c=> (
                    <div key={c._id} className="mx-8">
            <div className="rounded-lg  bg-base-200">
  <div className="flex gap-12 justify-between items-center">
  <div className="w-2/3 p-4">
  <h1 className="text-xl font-bold mb-4">Course Name: {c.name}</h1> <br />
    <img src={c.image}className="h-52 w-96 rounded-lg shadow-2xl" />
  </div>
    <div className="w-1/3">
        <h1 className="text-lg font-bold mb-4">Instructor: <br /> {c.instructor}</h1>
        <img className="h-52  rounded-lg" src={c.instructorImage} alt="" />
    </div>
    </div>
    <div className="p-4">
      <h1 className="text-3xl font-bold">${c.price}</h1>
      <p className="py-6 text-yellow-600">Available Seat: {c.seats}</p>
      <div>
      <button onClick={()=>handleDelete(item)} className="btn bg-black text-white hover:text-black">Delete</button>
      <button className="btn bg-black text-white hover;text-black">Pay</button>
      </div>
    </div>
  
</div>

        </div>
                ))
            }
        </div>
        
        </>
    );
};

export default MySelectedClass;