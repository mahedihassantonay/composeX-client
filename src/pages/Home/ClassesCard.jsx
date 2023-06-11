
const ClassesCard = ({course}) => {
    const {image, className, availableSeats,price, instructor } = course;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <p className="text-center text-blue-500">{availableSeats} Seat Remaining</p>
    <h2 className="text-xl font-semibold">{className}</h2>
    <p><span className="text-lg font-semibold">Instructor:</span> {instructor}</p>
    <p><span className="text-lg font-semibold">Cpurse Fee:</span> ${price}</p>
    
    <div className="card-actions justify-center">
      <button className="btn bg-black text-white">Buy Now</button>
    </div>
  </div>
</div>
        </>
    );
};

export default ClassesCard;