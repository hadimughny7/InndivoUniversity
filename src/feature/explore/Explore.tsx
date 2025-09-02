import Navbar from "../../components/layout/Navbar";
import HeroSection from "./sections/HeroSection";
import CourseSection from "./sections/CourseSection";
import SearchCourses from "./sections/SearchCourses";
import Footer from "../../components/layout/Footer";


function Explore() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CourseSection />
            <SearchCourses />
            <Footer />
        </div>
    )
}

export default Explore;
