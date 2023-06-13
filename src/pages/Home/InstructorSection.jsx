import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Fade, Slide } from "react-awesome-reveal";


import "swiper/css";
import "swiper/css/pagination";
import useCourses from "../../hooks/useCourses";
const InstructorSection = () => {

   const [courses] = useCourses()
    return (
        <div>
             <div className="text-center">
        <Slide>
          <h3 className="text-yellow-600 font-semibold tracking-wider">
            COURSE CATEGORIES
          </h3>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1} className='text-4xl font-bold py-4'>
          Meet Our Instructors
        </Fade>
      </div>

       <div className=" my-12">
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            courses.map(course=> (
                <SwiperSlide key={course._id}>
            <div className="h-96">
            <img className="h-96" src={course.instractorImage} alt="" />
            
            <div className="bg-black bg-opacity-20 absolute top-0">
                <h1 className="text-white p-4 font-bold">{course.className}</h1>
            </div>
            
            <div className="bg-black bg-opacity-20 absolute bottom-0 ">
                <h1 className="text-white p-4 font-bold">Instructor:{course.instructor}</h1>
            </div>
            </div>
            </SwiperSlide>
            ))
        }
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
       </div>
        </div>
    );
};

export default InstructorSection;