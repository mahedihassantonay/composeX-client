
const ClassesCard = ({course}) => {
    const {image, className, availableSeats, instructor } = course;
    return (
        <>
            <div className="card lg:w-96 bg-base-100 shadow-xl ">
  <figure><img className="h-96 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <p className="text-center text-yellow-600">{availableSeats} Seat Remaining</p>
    <h2 className="text-xl font-semibold">{className}</h2>
    <p><span className="text-lg font-semibold">Instructor:</span> {instructor}</p>
    <p><span className="text-lg font-semibold">Total Student:</span> {course.enrolledStudent}</p>
    
    
  </div>
</div>
        </>
    );
};

export default ClassesCard;