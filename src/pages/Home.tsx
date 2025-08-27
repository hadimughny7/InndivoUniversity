import type React from "react"
import FAQ from "../components/FAQ"
import Banner from "../assets/img/banner.png"
import IconCommunity from "../assets/icon/IconCommunity.png"
import IconMentor from "../assets/icon/IconMentor.png"
import IconKurikulum from "../assets/icon/IconKurikulum.png"
import BannerSection2 from "../assets/img/BannerSection2.png"
import PersonsImg from "../assets/img/Persons.png"
import MandiriLogo from "../assets/icon/mandiri.png"
import BiexLogo from "../assets/icon/biex.png"
import SircloLogo from "../assets/icon/sirclo.png"
import BriLogo from "../assets/icon/bri.png"
import TmLogo from "../assets/icon/tm.png"
import UserIcon from "../assets/icon/icon-user.png"
import BannerCommunity from "../assets/img/BannerCommunity.png"

import BlogCard1 from "../assets/img/BlogCard1.png"
import BlogCard2 from "../assets/img/BlogCard2.png"
import BlogCard3 from "../assets/img/BlogCard3.png"



interface Feature {
    icon: string
    title: string
    desc: string
}

interface Stat {
    value: string
    label: string
    desc: string
}

interface Course {
    img: string
    title: string
    rating: string
    date: string
    description: string
    level: string
    category: string
    author: string
    role: string
    price: string
}

const TRENDING_TOPICS = ["UI/UX Design", "Digital Marketing", "Human Resource"]

const FEATURES: Feature[] = [
    {
        icon: IconKurikulum,
        title: "Kurikulum Berbasis Industri",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        icon: IconMentor,
        title: "Belajar Dengan Mentor Berpengalaman",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        icon: IconCommunity,
        title: "Komunitas Belajar Yang Solid",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]

const STATS: Stat[] = [
    { value: "100+", label: "Peserta", desc: "Upgrade Karir" },
    { value: "95%", label: "Alumni", desc: "Upgrade Skills" },
    { value: "50+", label: "Mentor", desc: "Profesional" },
]

const COMPANY_LOGOS = [MandiriLogo, BiexLogo, SircloLogo, BriLogo, TmLogo]

const COURSES: Course[] = [
    {
        img: "/assets/img/unsplash-1.png",
        title: "Digital Marketing Mastery Course",
        rating: "4.5",
        date: "12 Mei 2025",
        description: "Master SEO, social media, content, and ads to boost your brand's online growth.",
        level: "Beginer",
        category: "Digital Marketing",
        author: "Michael Jane",
        role: "Digital Marketer",
        price: "Rp 175.000",
    },
    {
        img: "/assets/img/unsplash-1.png",
        title: "Digital Marketing Mastery Course",
        rating: "4.5",
        date: "12 Mei 2025",
        description: "Master SEO, social media, content, and ads to boost your brand's online growth.",
        level: "Beginer",
        category: "Digital Marketing",
        author: "Michael Jane",
        role: "Digital Marketer",
        price: "Rp 175.000",
    },
    {
        img: "/assets/img/unsplash-1.png",
        title: "Digital Marketing Mastery Course",
        rating: "4.5",
        date: "12 Mei 2025",
        description: "Master SEO, social media, content, and ads to boost your brand's online growth.",
        level: "Beginer",
        category: "Digital Marketing",
        author: "Michael Jane",
        role: "Digital Marketer",
        price: "Rp 175.000",
    },
    {
        img: "/assets/img/unsplash-1.png",
        title: "Digital Marketing Mastery Course",
        rating: "4.5",
        date: "12 Mei 2025",
        description: "Master SEO, social media, content, and ads to boost your brand's online growth.",
        level: "Beginer",
        category: "Digital Marketing",
        author: "Michael Jane",
        role: "Digital Marketer",
        price: "Rp 175.000",
    },
]

const PROGRAM_FILTERS = [
    "Semua Program",
    "Programming & Tech",
    "Graphics & Design",
    "Digital Marketing",
    "Business & Management",
    "Data",
    "Human Resource",
]

const TrendingTopics: React.FC = () => (
    <div className="flex flex-wrap gap-2 justify-start">
        {TRENDING_TOPICS.map((item, index) => (
            <a
                key={index}
                href="#"
                className="inline-block px-4 py-2 border-2 border-[#e92f05] text-[#e92f05] rounded-xl text-sm font-medium hover:bg-[#f44300] hover:text-white transition"
            >
                {item}
            </a>
        ))}
    </div>
)

const FeatureList: React.FC = () => (
    <div className="space-y-6">
        {FEATURES.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
                <img src={feature.icon || "/placeholder.svg"} alt={`Icon ${index + 1}`} className="w-10 sm:w-12 h-10 sm:h-12" />
                <div>
                    <h4 className="font-semibold text-base sm:text-lg">{feature.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
                </div>
            </div>
        ))}
    </div>
)

const StatsCard: React.FC = () => (
    <div className="card-stats absolute top-1/4 left-4 sm:left-5 bg-white/90 rounded-xl p-3 sm:p-4 shadow-lg z-40 max-w-[80%]">
        {STATS.map((stat, index) => (
            <div key={index}>
                <div className="stat mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#e22e00]">
                        {stat.value} <span>{stat.label}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">{stat.desc}</p>
                </div>
                {index < STATS.length - 1 && <div className="line border-t border-gray-200 my-2"></div>}
            </div>
        ))}
    </div>
)

const CompanyLogos: React.FC = () => (
    <div className="logo-list flex flex-wrap gap-4 items-center">
        {COMPANY_LOGOS.map((logo, index) => (
            <img
                key={index}
                src={logo || "/placeholder.svg"}
                alt={`Logo ${index}`}
                className="h-6 object-contain transition-transform hover:scale-110"
            />
        ))}
    </div>
)

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="course-card bg-white rounded-xl shadow-md overflow-hidden transition hover:-translate-y-1">
        <img src={course.img || "/placeholder.svg"} alt={course.title} className="card-img w-full h-40 object-cover" />
        <div className="card-body p-4">
            <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
            <p className="rating text-sm text-gray-600 mb-1">
                ⭐ Rating {course.rating} &nbsp; 📅 {course.date}
            </p>
            <p className="description text-sm text-gray-700 mb-2">{course.description}</p>
            <div className="tags flex gap-2 mb-3">
                <span className="tag green px-2 py-1 rounded">{course.level}</span>
                <span className="tag blue px-2 py-1 rounded">{course.category}</span>
            </div>
            <div className="author-price flex justify-between items-center">
                <div className="author flex items-center gap-2">
                    <img
                        src="/assets/img/icon/icon-mic.png"
                        alt={course.author}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="name font-semibold">{course.author}</p>
                        <p className="role text-gray-500 text-sm">{course.role}</p>
                    </div>
                </div>
                <p className="price font-bold">
                    {course.price} <span className="text-gray-500 text-sm">/ bulan</span>
                </p>
            </div>
        </div>
    </div>
)

const ProgramFilters: React.FC = () => (
    <div className="program-filters flex flex-wrap justify-center gap-2">
        {PROGRAM_FILTERS.map((filter, index) => (
            <button
                key={index}
                className={`filter-btn px-4 py-2 rounded-md border transition ${index === 0
                    ? "bg-[#e92f05] text-white border-[#e92f05]"
                    : "border-[#e92f05] text-[#e92f05] hover:bg-[#e92f05] hover:text-white"
                    }`}
            >
                {filter}
            </button>
        ))}
    </div>
)

function Home() {
    return (
        <div>
            {/* HERO SECTION */}
            <section
                id="home"
                className="flex flex-col lg:flex-row items-center bg-[url('/assets/img/imag.png')] bg-no-repeat bg-cover bg-center relative px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16 lg:py-20"
            >
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                    <img
                        src={Banner}
                        alt="Hero"
                        className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-2xl"
                    />
                </div>

                <div className="max-w-2xl space-y-4 text-left lg:text-left">
                    <h1 className="font-bold text-gray-900 leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        <span className="block lg:hidden">
                            Tingkatkan Skill Profesional <br />
                            Bersama{" "}
                            <span className="bg-gradient-to-r from-[#e92f05] to-[#f5af19] bg-clip-text text-transparent">
                                Inndivo University
                            </span>
                        </span>
                        <span className="hidden lg:block">
                            Tingkatkan Skill <br />
                            Profesional Bersama <br />
                            <span className="bg-gradient-to-r from-[#e92f05] to-[#f5af19] bg-clip-text text-transparent">
                                Inndivo University
                            </span>
                        </span>
                    </h1>

                    <p className="font-semibold text-gray-700">Trending :</p>
                    <TrendingTopics />

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore natus adipisci ullam. Veritatis quas
                        tempora minima laudantium corporis nulla sequi expedita vitae vel nihil eaque magnam consectetur, ratione
                        eveniet.
                    </p>

                    <div className="space-x-2">
                        <a
                            href="#"
                            className="inline-block px-4 py-2 border-2 border-[#e92f05] text-[#e92f05] rounded-xl text-sm font-medium hover:bg-[#f44300] hover:text-white transition"
                        >
                            Cari Kelas
                        </a>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 border-2 border-[#e92f05] bg-[#e92f05] text-white rounded-xl text-sm font-medium hover:bg-white hover:text-[#e92f05] transition"
                        >
                            Bergabung Sekarang
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="section-2 pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                        {/* Text + Feature */}
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                                Belajar & Berkembang <br />
                                Bangun Kualitas Terbaikmu <br />
                                <span className="bg-gradient-to-r from-[#e92f05] to-[#f5af19] bg-clip-text text-transparent">
                                    Bersama Kami
                                </span>
                            </h1>

                            <FeatureList />
                        </div>

                        {/* Image + Stats */}
                        <div className="section-2-image-wrapper flex-1 relative flex justify-center">
                            <div className="image-stack relative max-w-[85%] sm:max-w-sm mx-auto">
                                <img
                                    src={BannerSection2 || "/placeholder.svg"}
                                    alt="Laptop Discussion"
                                    className="main-img relative rounded-xl z-30"
                                />
                                <StatsCard />
                                <div className="shadow-card orange-1 absolute top-2 left-2 w-full h-full rounded-xl bg-[#f16722] opacity-40 -rotate-2 z-10"></div>
                                <div className="shadow-card orange-2 absolute top-5 left-5 w-full h-full rounded-xl bg-[#f16722] opacity-20 -rotate-2 z-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 (TESTIMONIAL) */}
            <section className="section-3 py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="section-3-wrapper flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-[80px]">
                        {/* Image (desktop kiri, mobile bawah) */}
                        <div className="testimonial-imgs w-full lg:w-[527px] h-auto lg:h-[291px] flex justify-center order-2 lg:order-1">
                            <img
                                src={PersonsImg || "/placeholder.svg"}
                                alt="Client"
                                className="w-full max-w-full lg:w-[627px] h-auto lg:h-[391px] rounded-[15px] shadow-md object-cover"
                            />
                        </div>

                        {/* Content (desktop kanan, mobile atas) */}
                        <div className="testimonial-content w-full lg:w-[539px] h-auto lg:h-[391px] mb-8 lg:mb-0 order-1 lg:order-2">
                            <h1 className="text-[48px] font-bold mb-4">
                                Trusted by <br />
                                <span>
                                    Awesome{" "}
                                    <span className="highlight bg-clip-text text-transparent bg-gradient-to-r from-[#e92f05] to-[#f5af19]">
                                        Learners
                                    </span>
                                </span>
                            </h1>

                            <p className="author text-[16px] mb-2 text-[#f44300]">
                                <strong className="font-bold">Roberto Crocodillo</strong>{" "}
                                <span className="font-normal text-gray-600">Founder Mengasi Rejeki</span>
                            </p>

                            <p className="quote text-[24px] font-normal text-gray-700 mb-8">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua."
                            </p>

                            <div className="dot-line flex gap-2 mb-8">
                                <span className="dot w-7 h-1.5 rounded-full bg-[#e92f05]"></span>
                                <span className="dot w-4 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="dot w-4 h-1.5 rounded-full bg-gray-300"></span>
                            </div>

                            <CompanyLogos />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 */}

            <section className="section-4 py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="section-4-header text-center mb-12">
                        {/* === MOBILE / TABLET VERSION === */}
                        <div className="flex flex-col items-center md:hidden">
                            <img src={UserIcon || "/placeholder.svg"} alt="Icon User" className="mb-2" />
                            <h1 className="text-2xl font-bold text-gray-800 mb-1">+10.000 Anggota</h1>
                            <h1 className="text-2xl font-bold">
                                Bergabung Dengan{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19]">
                                    Program
                                </span>
                            </h1>
                            <h1 className="text-2xl font-bold">Kami</h1>
                        </div>

                        {/* === DESKTOP VERSION === */}
                        <div className="hidden md:block">
                            <h1 className="member-count text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19] mb-2 flex items-center justify-center gap-2">
                                <img src={UserIcon} alt="Icon User" />
                                +10.000 <span className="text-gray-800 font-bold ml-1">Anggota</span>
                            </h1>
                            <h1 className="text-5xl font-bold mb-4">
                                Bergabung Dengan{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19]">
                                    Program Kami
                                </span>
                            </h1>
                        </div>

                        <p className="subtext max-w-xl mx-auto text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>

                        <ProgramFilters />
                    </div>

                    <div className="course-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {COURSES.map((course, index) => (
                            <CourseCard key={index} course={course} />
                        ))}
                    </div>

                    <div className="explore-btn text-center mt-8">
                        <a
                            href="#"
                            className="btn-orange-outline inline-block px-6 py-2 border-2 border-[#e92f05] text-[#e92f05] rounded-md font-semibold hover:bg-[#e92f05] hover:text-white transition"
                        >
                            Eksplor semua kelas
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 5 */}
            <section className="section-5 py-16 bg-white text-center">
                <div className="container max-w-[1200px] mx-auto px-4">
                    {/* Header */}
                    <div className="section-5-header">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#202020]">
                            Jadi Bagian Dari Komunitas
                        </h1>
                        <h1 className="highlight text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#e92f05] to-[#f5af19] bg-clip-text text-transparent mb-8">
                            Inndivo University
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="section-5-content flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
                        {/* Left: Features */}
                        <div className="feature-list flex-1 max-w-[320px] text-left mx-auto md:mx-0 order-1 md:order-1 w-full md:w-auto">
                            {/* Forum Diskusi */}
                            <div className="feature-item flex items-start gap-10 mb-5 justify-center md:justify-start"> {/* center di mobile */}
                                <div className="icon-circle bg-[#ffe8e0] p-4 sm:p-3 rounded-full flex justify-center items-center">
                                    <img src={IconCommunity} alt="Forum Diskusi" className="w-8 sm:w-6 h-8 sm:h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-[#333] text-lg sm:text-base">Forum Diskusi</p>
                                    <p className="text-md sm:text-md text-[#555]">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>

                            <hr className="my-5 border-t border-[#ddd]" />

                            {/* Webinar */}
                            <div className="feature-item flex items-start gap-10 justify-center md:justify-start">
                                <div className="icon-circle bg-[#ffe8e0] p-4 sm:p-3 rounded-full flex justify-center items-center">
                                    <img src={IconCommunity} alt="Webinar" className="w-8 sm:w-6 h-8 sm:h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-[#333] text-lg sm:text-base">Webinar</p>
                                    <p className="text-md sm:text-md text-[#555]">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>

                        {/* Middle: Image */}
                        <div className="community-image flex-1 max-w-[500px] order-2 md:order-2 w-full md:w-auto">
                            <img
                                src={BannerCommunity}
                                alt="Komunitas Belajar"
                                className="w-full"
                            />
                        </div>

                        {/* Right: Join box */}
                        <div className="join-box flex-1 max-w-[330px] text-left order-3 md:order-3 w-full md:w-auto">
                            <h4 className="text-2xl font-semibold text-[#333] mb-2">
                                Lorem ipsum dolor sit amet,
                            </h4>
                            <p className="text-md text-[#555] mb-6 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#"
                                className="btn-orange inline-block bg-[#e92f05] text-white px-6 py-2 border-2 border-[#e92f05] rounded-md font-semibold hover:bg-white hover:text-[#e92f05] transition"
                            >
                                Bergabung sekarang
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 6 */}
            <section className="section-6 py-16 bg-gradient-radial from-gray-300 to-white">
                <div className="container max-w-[1200px] mx-auto px-4">
                    {/* Header - dua kolom */}
                    <div className="section-6-header flex flex-col lg:flex-row items-start justify-between mb-10 gap-6">
                        {/* Kiri */}
                        <div className="text-left lg:w-1/2">
                            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19]">
                                Berita Populer
                            </h1>
                            <h2 className="text-5xl font-bold text-gray-900 mt-2">Saat Ini</h2>
                        </div>
                        {/* Kanan */}
                        <div className="lg:w-1/2">
                            <p className="text-gray-600 text-md max-w-[550px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    {/* Blog Cards */}
                    <div className="blog-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ img: BlogCard1 }, { img: BlogCard2 }, { img: BlogCard3 }].map((item, index) => (
                            <div key={index} className="blog-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
                                <img
                                    src={item.img}
                                    alt="AI News"
                                    className="blog-img w-[413px] h-[230px] object-cover mx-auto"
                                />
                                <div className="blog-content p-4">
                                    <h4 className="font-semibold text-lg mb-2">Lorem ipsum dolor sit amet</h4>
                                    <p className="text-gray-700 text-sm mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className="blog-footer flex justify-between items-center">
                                        <div className="blog-author flex items-center gap-2">
                                            <img src="" alt="Breaking News" className="w-9 h-9 object-cover rounded-full" />
                                            <span className="text-sm font-semibold text-gray-800">Breaking News</span>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn-outline-orange inline-block px-4 py-2 border-2 border-[#e92f05] text-[#e92f05] rounded-lg font-semibold transition hover:bg-[#e92f05] hover:text-white"
                                        >
                                            Baca selengkapnya
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Button Explore */}
                    <div className="explore-blog text-center mt-12">
                        <a
                            href="#"
                            className="btn-outline-orange inline-block px-6 py-3 border-2 border-[#e92f05] text-[#e92f05] rounded-lg font-semibold transition hover:bg-[#e92f05] hover:text-white"
                        >
                            Eksplor selengkapnya
                        </a>
                    </div>
                </div>
            </section>
            
            <FAQ />

        </div>
    )
}

export default Home
