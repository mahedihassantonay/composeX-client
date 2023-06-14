import { Link, useRouteError } from "react-router-dom";
import page404 from '../assets/page404.json'
import Lottie from "lottie-react";


const Page404 = () => {
  const { error, status } = useRouteError();
  return (
    <div className="text-center min-h-screen pt-24">
      <Lottie className="h-96" animationData={page404} loop={true} />;
      <h1 className="text-3xl md:text-4xl lg:text-9xl font-bold text-gray-800 mb-2">
        {status || 400}
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-600 mb-4">
        {error?.message}
      </h2>
      <Link to="/">
        <button className="btn bg-black hover:text-black text-white font-bold py-2 px-4 rounded">
          Go back home
        </button>
      </Link>
    </div>
  );
};
export default Page404;
