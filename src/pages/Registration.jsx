import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password).then((result) => {
      console.log(result.user);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const dbUsers = { name: data.name, email: data.email };
          fetch("https://server2-sepia-nine.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dbUsers),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                console.log("user profile updated");
                navigate("/");
              }
            });
        })
        // reset
        .catch((error) => {
          console.log(error);
        });
    });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <h1 className="text-5xl font-bold">Please Sign Up Here !!</h1>

          <div className="card  w-full shadow-2xl bg-base-100">
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  // onChange={e=> setName(e.target.value)}
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                  //   required
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  // onChange={e=> setName(e.target.value)}
                  type="text"
                  placeholder="url"
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                  //   required
                />
                {errors.photoURL && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  // onChange={e=> setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                  required
                />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  // onChange={e=> setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d]/,
                  })}
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    password must be 6 characters long
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    password must have at least one upercase letter, one special
                    character and a number
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="sign up"
                  className="btn bg-black text-white hover:text-black"
                />
              </div>
            </form>
            <div className="text-center pb-4">
              <small>
                Already Have an Account !{" "}
                <Link className="underline text-blue-500" to="/login">
                  Login
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
