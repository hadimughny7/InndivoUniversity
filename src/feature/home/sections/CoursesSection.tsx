import { useState } from "react";
import UserIcon from "../../../assets/icon/icon-user.png";
import FloatButton from "../../../assets/icon/Float Button.png";
import CalenderIcon from "../../../assets/icon/Calendar Minimalistic.png"
import CardCourse from "../../../assets/img/CardCourse.png"

const PROGRAM_FILTERS = [
    "Semua Program",
    "Programming & Tech",
    "Graphics & Design",
    "Digital Marketing",
    "Business & Management",
    "Data",
    "Human Resource",
];

const ProgramFilters: React.FC = () => (
    <div className="program-filters flex flex-wrap justify-center gap-2">
        {PROGRAM_FILTERS.map((filter, index) => (
            <button
                key={index}
                className={`filter-btn px-4 py-2 rounded-md border transition ${
                    index === 0
                        ? "bg-[#e92f05] text-white border-[#e92f05]"
                        : "border-[#e92f05] text-[#e92f05] hover:bg-[#e92f05] hover:text-white"
                }`}
            >
                {filter}
            </button>
        ))}
    </div>
);

interface Course {
    img: string;
    title: string;
    rating: string;
    date: string;
    description: string;
    level: string;
    category: string;
    author: string;
    role: string;
    price: string;
    authorImg: string; 
}

const COURSES: Course[] = [
    {
        img: CardCourse,
        title: "Digital Marketing Mastery Course",
        rating: "4.5",
        date: "12 Mei 2025",
        description:
            "Master SEO, social media, content, and ads to boost your brand's online growth.",
        level: "Beginner",
        category: "Digital Marketing",
        author: "Michael Jane",
        role: "Digital Marketer",
        price: "Rp 175.000",
        authorImg: CardCourse,
    },
    {
        img: CardCourse,
        title: "Full-Stack Web Development Bootcamp",
        rating: "4.8",
        date: "20 Mei 2025",
        description:
            "Belajar membangun aplikasi web modern dengan React, Node.js, dan database.",
        level: "Intermediate",
        category: "Programming & Tech",
        author: "Sarah Connor",
        role: "Software Engineer",
        price: "Rp 250.000",
        authorImg: CardCourse,
    },
    {
        img: CardCourse,
        title: "Graphic Design Essentials",
        rating: "4.6",
        date: "5 Juni 2025",
        description:
            "Pelajari prinsip desain grafis dengan Photoshop & Illustrator.",
        level: "Beginner",
        category: "Graphics & Design",
        author: "Alex Turner",
        role: "Graphic Designer",
        price: "Rp 150.000",
        authorImg: CardCourse,
    },
    {
        img: CardCourse,
        title: "Business Management Fundamentals",
        rating: "4.4",
        date: "15 Juni 2025",
        description:
            "Dasar-dasar manajemen bisnis untuk pemula dan calon entrepreneur.",
        level: "Beginner",
        category: "Business & Management",
        author: "Linda Wong",
        role: "Business Coach",
        price: "Rp 200.000",
        authorImg: CardCourse,
    },
    {
        img: CardCourse,
        title: "Business Management Fundamentals",
        rating: "4.4",
        date: "15 Juni 2025",
        description:
            "Dasar-dasar manajemen bisnis untuk pemula dan calon entrepreneur.",
        level: "Beginner",
        category: "Business & Management",
        author: "Linda Wong",
        role: "Business Coach",
        price: "Rp 200.000",
        authorImg: CardCourse,
    },
    {
        img: CardCourse,
        title: "Business Management Fundamentals",
        rating: "4.4",
        date: "15 Juni 2025",
        description:
            "Dasar-dasar manajemen bisnis untuk pemula dan calon entrepreneur.",
        level: "Beginner",
        category: "Business & Management",
        author: "Linda Wong",
        role: "Business Coach",
        price: "Rp 200.000",
        authorImg: CardCourse,
    },
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div
        className="bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0"
        style={{ width: 345, height: 454 }}
    >
        <img
            src={course.img}
            alt={course.title}
            className="mx-auto object-cover"
            style={{ width: 325, height: 183 }}
        />
        <div className="p-4">
            <h3 className="font-semibold text-md mb-1">{course.title}</h3>
            <div className="flex items-center text-md mb-2">
                <span className="mr-2">⭐ {course.rating}</span>
                <span>
                    <img src={CalenderIcon} alt="Calendar" className="inline-block" />
                </span>
                <span className="ml-2">{course.date}</span>
            </div>
            <p className="text-md text-gray-500 mb-4">{course.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#00B04C] text-white text-md font-normal px-2 py-1 rounded">
                    {course.level}
                </span>
                <span className="bg-[#007AFF] text-white text-md font-normal px-2 py-1 rounded">
                    {course.category}
                </span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src={course.authorImg}
                        alt={course.author}
                        className="w-11 h-11 rounded-full"
                    />
                    <div>
                        <p className="text-xs font-semibold">{course.author}</p>
                        <p className="text-xs text-gray-500">{course.role}</p>
                    </div>
                </div>
                <p className="text-sm font-bold text-gray-800">
                    {course.price}/ bulan
                </p>
            </div>
        </div>
    </div>
);

const CoursesSection: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        const visibleCount = 3;
        if (index + visibleCount >= COURSES.length) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
        }
    };

    return (
        <div>
            <section className="section-4 py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="section-4-header text-center mb-12">
                        <div className="flex flex-col items-center md:hidden">
                            <img
                                src={UserIcon || "/placeholder.svg"}
                                alt="Icon User"
                                className="mb-2"
                            />
                            <h1 className="text-2xl font-bold text-gray-800 mb-1">
                                +10.000 Anggota
                            </h1>
                            <h1 className="text-2xl font-bold">
                                Bergabung Dengan{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19]">
                                    Program
                                </span>
                            </h1>
                            <h1 className="text-2xl font-bold">Kami</h1>
                        </div>

                        <div className="hidden md:block">
                            <h1 className="member-count text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19] mb-2 flex items-center justify-center gap-2">
                                <img src={UserIcon} alt="Icon User" />
                                +10.000{" "}
                                <span className="text-gray-800 font-bold ml-1">Anggota</span>
                            </h1>
                            <h1 className="text-5xl font-bold mb-4">
                                Bergabung Dengan{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19]">
                                    Program Kami
                                </span>
                            </h1>
                        </div>

                        <p className="subtext max-w-xl mx-auto text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <ProgramFilters />
                    </div>

                    <div className="relative flex items-center">
                        <div className="overflow-visible w-full">
                            <div
                                className="flex gap-6 transition-transform duration-500"
                                style={{
                                    transform: `translateX(-${index * 370}px)`,
                                }}
                            >
                                {COURSES.map((course, i) => {
                                    const visibleCount = 3;
                                    const sneakPeek = index + visibleCount;

                                    return (
                                        <div
                                            key={i}
                                            className={`transition-all duration-500 ${
                                                i === sneakPeek
                                                    ? "opacity-50 scale-95"
                                                    : "opacity-100 scale-100"
                                            } hidden md:flex`}
                                        >
                                            <CourseCard course={course} />
                                        </div>
                                    );
                                })}
                                <div className="flex md:hidden w-full justify-center">
                                    <CourseCard course={COURSES[index]} />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="absolute -right-6 z-10 p-2 hover:scale-110 transition hidden md:block"
                        >
                            <img src={FloatButton} alt="next" className="w-9 h-9" />
                        </button>
                    </div>

                    <div className="explore-btn text-center mt-8">
                        <a
                            href="#"
                            className="btn-orange-outline inline-block px-6 py-2 border-1 border-[#e92f05] text-[#e92f05] rounded-[8px] hover:bg-[#e92f05] hover:text-white transition"
                        >
                            Eksplor semua kelas
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesSection;
