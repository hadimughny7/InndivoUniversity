// HomePage.tsx
import React, { useState } from "react";
import BackgroundSection from "../../../assets/img/Background.png";
import SideImage from "../../../assets/img/SidePersons.png";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Lorem ipsum dolor sit amet?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Answer for the second question.",
    },
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Answer for the third question.",
    },
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Answer for the fourth question.",
    },
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Answer for the fifth question.",
    },
];

const HomePage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* ===== FAQ Section ===== */}
            <section className="py-16 bg-gradient-radial from-gray-300 to-white">
                <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-10 px-4 sm:px-6 md:px-12 py-10">

                    {/* Left Title di atas */}
                    <div className="flex-1 flex flex-col justify-start">
                        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                            Frequently Asked <br />
                            <span className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h1>
                    </div>

                    {/* Right Accordion */}
                    <div className="flex-1 md:flex-[2] bg-white rounded-xl shadow-lg p-6 max-w-full md:max-w-[737px]">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`border-b last:border-b-0 ${activeIndex === index ? "accordion-active" : ""
                                    }`}
                            >
                                <button
                                    className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-900 hover:text-red-600 transition"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.question}
                                    <span
                                        className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                            }`}
                                    >
                                        &#9660;
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 py-2" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-gray-800">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* ===== Banner Section ===== */}
            <section
                className="
    relative bg-cover bg-center 
    max-w-[350px] mx-auto
    md:rounded-3xl md:max-w-6xl md:mx-auto
    px-4 sm:px-6 lg:px-12 rounded-3xl
  "
                style={{ backgroundImage: `url(${BackgroundSection})` }}
            >
                <div className="py-16 md:py-20 flex flex-col md:flex-row items-center md:items-start gap-8 h-auto md:h-[400px]">

                    <div className="flex-1 text-left">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[38px] font-bold text-white leading-tight mb-4">
                            Siap Menjadi
                            <br />
                            <span className="text-white">Programer Handal?</span>
                            <br />
                            Sekarang Saatnya
                        </h2>
                        <p className="text-white text-sm font-normal mb-6 max-w-sm sm:max-w-md mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a
                            href="#daftar"
                            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition"
                        >
                            Daftar sekarang
                        </a>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full md:w-auto">
                        <img
                            src={SideImage}
                            alt="Side Banner"
                            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg md:absolute md:bottom-0 md:right-0 mr-4 md:mr-19"
                        />
                    </div>
                </div>
            </section>


        </div>
    );
};

export default HomePage;
