import { Fade, Slide } from "react-awesome-reveal";
import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";
import icon4 from "../../assets/4.png";
import feature from "../../assets/feature.jpg";

const Features = () => {
  return (
    <div className="my-24">
      <div className="text-center">
        <Slide>
          <h3 className="text-yellow-600 font-semibold tracking-wider">
            WHY CHOOSE US
          </h3>
        </Slide>
        <Fade
          delay={1e3}
          cascade
          damping={1e-1}
          className="text-4xl font-bold py-4"
        >
          Our Core Features
        </Fade>
      </div>
      <div className="bg flex justify-evenly gap-8 p-8 rounded-lg">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img src={icon1} alt="" />
            <Fade
              delay={2e3}
              cascade
              damping={1e-1}
              className="text-lg font-bold"
            >
              Flexible Classes
            </Fade>

            <p className="text-xs text-gray-600">
              Tailor your learning experience with flexible classes designed to
              fit your schedule and preferences.
            </p>
          </div>
          <div>
            <img src={icon2} alt="" />
            <Fade
              delay={3e3}
              cascade
              damping={1e-1}
              className="text-lg font-bold"
            >
              Offline Mode
            </Fade>
            <p className="text-xs text-gray-600">
              Access course materials and continue learning even without an
              internet connection.
            </p>
          </div>
          <div>
            <img src={icon3} alt="" />
            <Fade
              delay={4e3}
              cascade
              damping={1e-1}
              className="text-lg font-bold"
            >
              Flexible Learning
            </Fade>
            <p className="text-xs text-gray-600">
              Learn at your own pace, allowing you to balance your photography
              education with other commitments.
            </p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <Fade
              delay={5e3}
              cascade
              damping={1e-1}
              className="text-lg font-bold"
            >
              Educator Support
            </Fade>

            <p className="text-xs text-gray-600">
              Receive personalized guidance and assistance from our dedicated
              educators throughout your learning journey.
            </p>
          </div>
        </div>
        <div className="">
          <img className="rounded-lg" src={feature} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
