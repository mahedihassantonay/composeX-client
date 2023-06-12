import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddClass = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert('added')
        }
      });
    console.log(data);
  };
  return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-bold">Create a New Class</h1>
      <div className=" px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* category */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Class Name*
              </span>
            </label>
            <select
              {...register("className", { required: true })}
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Introduction to Photography</option>
              <option>Portrait Photography</option>
              <option>Landscape Photography</option>
              <option>Street Photography</option>
              <option>Wildlife Photography</option>
              <option>Travel Photography</option>
              <option>Photo Editing and Retouching</option>
              <option>Fashion Photography</option>
            </select>
          </div>

          {/* image */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Class Image*
              </span>
            </label>
            <input
              type="text"
              placeholder="image url"
              className="input input-bordered w-full "
              {...register("image", { required: true })}
            />
          </div>
          {/* price */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </div>

           {/* Available seats */}
           <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Available Seats*
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter available seats"
              className="input input-bordered w-full"
              {...register("availableSeats", { required: true })}
            />
          </div>

          {/* instructor name*/}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Instructor Name
              </span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="instructor name"
              className="input input-bordered w-full"
              {...register("instructor", { required: true })}
              readOnly
            />
          </div>
          {/* instructor email */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Instructor Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered w-full "
              {...register("instructorEmail", { required: true })}
              readOnly
            />
          </div>

          <input type="submit" className="btn bg-black text-white font-bold hover:text-black  mt-4" value="Add Class" />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
