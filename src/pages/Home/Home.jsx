import Banner from "./Banner";
import 'swiper/css';
import PopularClasses from "./PopularClasses";
import InstructorSection from "./InstructorSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <InstructorSection />
        </div>
    );
};

export default Home;