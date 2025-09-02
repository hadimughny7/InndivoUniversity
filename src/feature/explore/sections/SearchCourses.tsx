import React, { useState, useEffect } from "react";
import IconCalender from "../../../assets/icon/Calendar Minimalistic.png";
import CardCourse from "../../../assets/img/card2.png"

interface Course {
  id: number;
  title: string;
  rating: number;
  date: string;
  description: string;
  level: string;
  category: string;
  fee: "Gratis" | "Berbayar";
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  price: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Basic Python for Data Analyst",
    rating: 4.5,
    date: "2025-05-12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    level: "Pemula",
    category: "Programming",
    fee: "Berbayar",
    instructor: {
      name: "Jaka Sembung",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=JS",
      role: "Data Analyst",
    },
    price: "Rp 175.000/bulan",
    image: CardCourse,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    rating: 4.7,
    date: "2025-05-15",
    description: "Learn advanced JS concepts and patterns",
    level: "Menengah",
    category: "Programming",
    fee: "Berbayar",
    instructor: {
      name: "Rina Wulandari",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=RW",
      role: "Frontend Developer",
    },
    price: "Rp 200.000/bulan",
    image: CardCourse,
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    rating: 4.2,
    date: "2025-04-20",
    description: "Introduction to UI/UX Design",
    level: "Pemula",
    category: "Design",
    fee: "Gratis",
    instructor: {
      name: "Siti Aminah",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=SA",
      role: "UI/UX Designer",
    },
    price: "Gratis",
    image: CardCourse,
  },
  {
    id: 4,
    title: "Digital Marketing Fundamentals",
    rating: 4.0,
    date: "2025-03-18",
    description: "Learn the basics of Digital Marketing",
    level: "Pemula",
    category: "Marketing",
    fee: "Gratis",
    instructor: {
      name: "Agus Santoso",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=AS",
      role: "Digital Marketer",
    },
    price: "Gratis",
    image: CardCourse,
  },
  {
    id: 5,
    title: "React JS for Beginners",
    rating: 4.8,
    date: "2025-06-01",
    description: "Start building web apps with React JS",
    level: "Pemula",
    category: "Programming",
    fee: "Berbayar",
    instructor: {
      name: "Budi Hartono",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=BH",
      role: "Frontend Developer",
    },
    price: "Rp 150.000/bulan",
    image: CardCourse,
  },
  {
    id: 6,
    title: "Advanced CSS Techniques",
    rating: 4.3,
    date: "2025-04-25",
    description: "Master complex CSS layouts and animations",
    level: "Menengah",
    category: "Design",
    fee: "Berbayar",
    instructor: {
      name: "Dewi Lestari",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=DL",
      role: "UI/UX Designer",
    },
    price: "Rp 120.000/bulan",
    image: CardCourse,
  },
  {
    id: 7,
    title: "Excel for Data Analysis",
    rating: 4.1,
    date: "2025-02-10",
    description: "Learn Excel tools for Data Analysis",
    level: "Pemula",
    category: "Programming",
    fee: "Gratis",
    instructor: {
      name: "Fajar Nugroho",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=FN",
      role: "Data Analyst",
    },
    price: "Gratis",
    image: CardCourse,
  },
  {
    id: 8,
    title: "Illustrator for Beginners",
    rating: 4.5,
    date: "2025-03-05",
    description: "Learn Adobe Illustrator basics",
    level: "Pemula",
    category: "Design",
    fee: "Berbayar",
    instructor: {
      name: "Intan Permata",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=IP",
      role: "Graphic Designer",
    },
    price: "Rp 100.000/bulan",
    image: CardCourse,
  },
  {
    id: 9,
    title: "SEO Optimization Basics",
    rating: 4.4,
    date: "2025-05-22",
    description: "Improve website ranking with SEO",
    level: "Pemula",
    category: "Marketing",
    fee: "Berbayar",
    instructor: {
      name: "Lina Marlina",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=LM",
      role: "SEO Specialist",
    },
    price: "Rp 130.000/bulan",
    image: CardCourse,
  },
  {
    id: 10,
    title: "Node JS Crash Course",
    rating: 4.6,
    date: "2025-06-05",
    description: "Learn server-side development with Node JS",
    level: "Menengah",
    category: "Programming",
    fee: "Berbayar",
    instructor: {
      name: "Rico Pratama",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=RP",
      role: "Backend Developer",
    },
    price: "Rp 180.000/bulan",
    image: CardCourse,
  },
  {
    id: 11,
    title: "Advanced Photoshop Techniques",
    rating: 4.2,
    date: "2025-04-28",
    description: "Learn advanced photo editing techniques",
    level: "Menengah",
    category: "Design",
    fee: "Berbayar",
    instructor: {
      name: "Maya Sari",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=MS",
      role: "Graphic Designer",
    },
    price: "Rp 150.000/bulan",
    image: CardCourse,
  },
  {
    id: 12,
    title: "Social Media Marketing",
    rating: 5,
    date: "2025-05-30",
    description: "Learn strategies for social media campaigns",
    level: "Pemula",
    category: "Marketing",
    fee: "Gratis",
    instructor: {
      name: "Rani Anggraini",
      avatar: "https://via.placeholder.com/32x32/6B7280/FFFFFF?text=RA",
      role: "Digital Marketer",
    },
    price: "Gratis",
    image: CardCourse,
  },
];

const formatTanggal = (dateStr: string) =>
  new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(dateStr));

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow md:max-w-sm">
    <div className="p-4">
      <img src={course.image} alt={course.title} className="object-cover rounded-lg mb-4" style={{ width: 380, height: 214 }} />
      <h3 className="font-semibold text-gray-900 mb-2 text-lg">{course.title}</h3>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1">
          <i className="fas fa-star text-yellow-400 text-sm"></i>
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
        <img src={IconCalender} alt="" />
        <span className="text-sm font-medium">{formatTanggal(course.date)}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
      <div className="flex gap-3 mb-4">
        <button className="bg-[#00B04C] text-white text-md font-normal px-2 py-1 rounded">{course.level}</button>
        <button className="bg-[#007AFF] text-white text-md font-normal px-2 py-1 rounded">{course.category}</button>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <img src={course.instructor.avatar} alt={course.instructor.name} className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-700">{course.instructor.name}</p>
            <p className="text-xs text-gray-500">{course.instructor.role}</p>
          </div>
        </div>
        <span className="text-sm font-bold text-gray-800">{course.price}</span>
      </div>
    </div>
  </div>
);

const SearchCourses: React.FC = () => {
  const [inputTerm, setInputTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");
  const [fee, setFee] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) setCardsPerPage(3);
      else setCardsPerPage(6);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Reset halaman 1 saat filter/search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category, rating, level, date, fee]);

  const handleSearch = () => setSearchTerm(inputTerm);

  const filteredCourses = courses
    .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(course => !category || category === "Semua" || course.category === category)
    .filter(course => {
      if (!rating || rating === "Semua") return true;
      if (rating === "5 Bintang") return course.rating === 5;
      if (rating === "4+ Bintang") return course.rating >= 4;
      if (rating === "3+ Bintang") return course.rating >= 3;
      return true;
    })
    .filter(course => !level || level === "Semua" || course.level === level)
    .filter(course => !fee || fee === "Semua" || course.fee === fee)
    .sort((a, b) => (date === "Terlama" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)));

  const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCourses = filteredCourses.slice(startIndex, startIndex + cardsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-900 mb-6">Cari Courses</h2>

        {/* --- Search Bar --- */}
        <div className="mb-6">
          <div className="md:hidden flex rounded-lg border border-gray-300 overflow-hidden">
            <div className="relative flex-1">
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Cari lebih dari 50+ kursus"
                className="pl-12 pr-4 py-3 text-sm w-full focus:outline-none"
                value={inputTerm}
                onChange={e => setInputTerm(e.target.value)}
              />
            </div>
            <button className="bg-[#E92F05] text-white px-6 py-3 font-medium" onClick={handleSearch}>Cari</button>
          </div>

          <div className="hidden md:flex items-center gap-2 max-w-7xl mx-auto">
            <div className="relative" style={{ width: 1158, height: 48 }}>
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Cari lebih dari 50+ kursus"
                className="pl-12 pr-4 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full h-full rounded-lg"
                value={inputTerm}
                onChange={e => setInputTerm(e.target.value)}
              />
            </div>
            <button className="bg-[#E92F05] hover:opacity-90 text-white transition-colors whitespace-nowrap rounded-lg" style={{ width: 78, height: 48 }} onClick={handleSearch}>Cari</button>
          </div>
        </div>

        {/* --- Filter Bar (Mobile & Desktop tetap sama persis) --- */}
        <div className="mb-6">
          {/* Mobile */}
          <div className="md:hidden">
            <div className="text-gray-700 font-medium mb-4">Urut Berdasarkan</div>
            <div className="grid grid-cols-2 gap-4">
              {/* Category */}
              <select className="bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none text-sm w-full" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="" disabled hidden>Category</option>
                <option>Semua</option>
                <option>Programming</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
              {/* Rating */}
              <select className="bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none text-sm w-full" value={rating} onChange={e => setRating(e.target.value)}>
                <option value="" disabled hidden>Rating</option>
                <option>Semua</option>
                <option>5 Bintang</option>
                <option>4+ Bintang</option>
                <option>3+ Bintang</option>
              </select>
              {/* Level */}
              <select className="bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none text-sm w-full" value={level} onChange={e => setLevel(e.target.value)}>
                <option value="" disabled hidden>Level</option>
                <option>Semua</option>
                <option>Pemula</option>
                <option>Menengah</option>
                <option>Lanjutan</option>
              </select>
              {/* Date */}
              <select className="bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none text-sm w-full" value={date} onChange={e => setDate(e.target.value)}>
                <option value="" disabled hidden>Date</option>
                <option>Terbaru</option>
                <option>Terlama</option>
              </select>
              {/* Fee */}
              <select className="bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none text-sm w-full col-span-2" value={fee} onChange={e => setFee(e.target.value)}>
                <option value="" disabled hidden>Fee Option</option>
                <option>Semua</option>
                <option>Gratis</option>
                <option>Berbayar</option>
              </select>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2.5 justify-center flex-wrap max-w-7xl mx-auto">
            <div className="text-gray-700 font-medium mb-4">Urut Berdasarkan</div>
            {["category","rating","level","date","fee"].map((filter,key)=>(
              <select
                key={key}
                className="bg-white border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ width: 212, height: 48, borderRadius: 8 }}
                value={{category,rating,level,date,fee}[filter]}
                onChange={e=>{
                  const val=e.target.value;
                  if(filter==="category") setCategory(val);
                  if(filter==="rating") setRating(val);
                  if(filter==="level") setLevel(val);
                  if(filter==="date") setDate(val);
                  if(filter==="fee") setFee(val);
                }}
              >
                <option value="" disabled hidden>{filter.charAt(0).toUpperCase()+filter.slice(1)}</option>
                {filter==="category"&&["Semua","Programming","Design","Marketing"].map(o=><option key={o}>{o}</option>)}
                {filter==="rating"&&["Semua","5 Bintang","4+ Bintang","3+ Bintang"].map(o=><option key={o}>{o}</option>)}
                {filter==="level"&&["Semua","Pemula","Menengah","Lanjutan"].map(o=><option key={o}>{o}</option>)}
                {filter==="date"&&["Terbaru","Terlama"].map(o=><option key={o}>{o}</option>)}
                {filter==="fee"&&["Semua","Gratis","Berbayar"].map(o=><option key={o}>{o}</option>)}
              </select>
            ))}
          </div>
        </div>

        {/* --- Course Cards --- */}
        <div className="space-y-6 md:flex md:flex-wrap md:gap-9 md:justify-center md:space-y-0 mb-8 md:mb-12">
          {currentCourses.map(course => <CourseCard key={course.id + course.title} course={course} />)}
        </div>

        {/* --- Pagination --- */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="flex items-center space-x-2">
            <button
              className="w-8 md:w-10 h-8 md:h-10 text-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              <span className="text-sm">&#8249;</span>
            </button>

            {pageNumbers.map(num => (
              <button
                key={num}
                className={`w-8 md:w-10 h-8 md:h-10 rounded-lg flex items-center justify-center font-medium text-sm md:text-base ${
                  num === currentPage ? "bg-red-500 text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            ))}

            <button
              className="w-8 md:w-10 h-8 md:h-10 text-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            >
              <span className="text-sm">&#8250;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCourses;
