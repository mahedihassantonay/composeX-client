import Banner from "./Banner";
import 'swiper/css';
import PopularClasses from "./PopularClasses";
import InstructorSection from "./InstructorSection";
import Features from "./Features";


const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <InstructorSection />
            <Features />
        </div>
    );
};

export default Home;