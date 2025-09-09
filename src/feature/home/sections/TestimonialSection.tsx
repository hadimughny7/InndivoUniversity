import React from "react"
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
    <section className="section-3 pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 px-4">
        {/* Content */}
        <div className="max-w-2xl testimonial-content flex-1 space-y-4 order-1 lg:order-2 flex flex-col lg:items-start lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold mb-4">
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
          <p className="quote text-1xl sm:text-2xl md:text-[24px] font-normal text-gray-700 mb-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <div className="dot-line flex gap-2 mb-8 justify-center lg:justify-start">
            <span className="dot w-7 h-1.5 rounded-full bg-[#e92f05]"></span>
            <span className="dot w-4 h-1.5 rounded-full bg-gray-300"></span>
            <span className="dot w-4 h-1.5 rounded-full bg-gray-300"></span>
          </div>
          <CompanyLogos />
        </div>
        {/* Image */}
        <div className="max-w-2xl testimonial-imgs lg:w-1/2 flex justify-center order-2 lg:order-1">
          <img
            src={PersonsImg}
            alt="Client"
            className="w-full max-w-full lg:w-[627px] h-auto lg:h-[391px] rounded-[15px] shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
