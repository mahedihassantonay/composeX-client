import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const {signIn} = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        signIn(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate('/')
        })
       
      }
    return (
        <>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          
            <h1 className="text-5xl font-bold">Please Sign Up Here !!</h1>
           
          
          <div className="card  w-full shadow-2xl bg-base-100">
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
         

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
                
                  })}
                  required
                />
                {errors && (
                  <p className="text-red-500">Email/password is invalid</p>
                )}
               
               
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-black text-white hover:text-black"
                />
              </div>
            </form>
            <div className="text-center pb-4">
              <small>
                New to this Page !{" "}
                <Link className="underline text-blue-500" to="/registration">
                  Create an account here
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
            
        </>
    );
};

export default Login;