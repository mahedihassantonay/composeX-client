import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/banner/1.png'




const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       <>
         <Slider {...settings}>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
      <img src="https://i.ibb.co/QvMKYng/Capture-Your-Creativity-2.png" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/j6KcVLZ/Capture-Your-Creativity-3.png" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/X7qmqhW/Capture-Your-Creativity-4.png" alt="" />
      </div>
      
     
    </Slider>
       </>
        
    );
};

export default Banner;