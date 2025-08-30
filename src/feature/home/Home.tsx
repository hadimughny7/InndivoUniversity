import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FAQ from "./sections/FAQ"
import HeroSection from "./sections/HeroSection"
import FeatureSection from "./sections/FeatureSection"
import TestimonialSection from "./sections/TestimonialSection"
import CoursesSection from "./sections/CoursesSection"
import CommunitySection from "./sections/CommunitySection"
import BlogSection from "./sections/BlogSection"




function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection/>
            <TestimonialSection/>
            <CoursesSection/>
            <CommunitySection/>
            <BlogSection/>            
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home
