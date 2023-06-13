import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../hooks/useSelectedClass";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment);

const ClassPayment = () => {
    const [courses] = useSelectedClass();
    const singleprice = courses.map(c=>c.price)
  const price = parseFloat(singleprice)
    return (
        <div className="w-full">
            <h1 className="text-4xl font-bold border p-2 text-center">PAYMENT</h1>
          <div className="w-4/6 mx-auto">
          <Elements  stripe={stripePromise}>
      <CheckOutForm courses={courses}  price={price}/>
      </Elements>
          </div>
        </div>
    );
};

export default ClassPayment;