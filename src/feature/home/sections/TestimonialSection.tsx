import React from "react";
import PersonsImg from "../../../assets/img/Persons.png"
import MandiriLogo from "../../../assets/icon/mandiri.png"
import BiexLogo from "../../../assets/icon/biex.png"
import SircloLogo from "../../../assets/icon/sirclo.png"
import BriLogo from "../../../assets/icon/bri.png"
import TmLogo from "../../../assets/icon/tm.png"

const COMPANY_LOGOS = [MandiriLogo, BiexLogo, SircloLogo, BriLogo, TmLogo]
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

const TestimonialSection: React.FC = () => {
    return (
        <div>
            <section className="section-3 py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="section-3-wrapper flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-[80px]">
                        {/* Image */}
                        <div className="testimonial-imgs w-full lg:w-[527px] h-auto lg:h-[291px] flex justify-center order-2 lg:order-1">
                            <img
                                src={PersonsImg}
                                alt="Client"
                                className="w-full max-w-full lg:w-[627px] h-auto lg:h-[391px] rounded-[15px] shadow-md object-cover"
                            />
                        </div>

                        {/* Content */}
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
        </div>
    );
};

export default TestimonialSection;
