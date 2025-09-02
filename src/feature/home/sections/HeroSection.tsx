import React from "react";
import ContentVisual from "../../../assets/img/Content Visual.png";
import BackgroundHeroSection from "../../../assets/img/BgHomeHeroSection.png"

const TRENDING_TOPICS = ["UI/UX Design", "Digital Marketing", "Human Resource"]

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
);

const HeroSection: React.FC = () => {
  return (
    <div>
    {/* HERO SECTION */}
            <section
                id="home"
                className="flex flex-col lg:flex-row items-center bg-no-repeat bg-cover bg-center relative px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16 lg:py-20"
                style={{ backgroundImage: `url(${BackgroundHeroSection})` }}
            >
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                    <img
                        src={ContentVisual}
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
                            <span className="text-[#E92F05]">
                                Inndivo University
                            </span>
                        </span>
                    </h1>

                    <p className="font-semibold text-gray-700 text-[16px]">Trending : </p>
                    <TrendingTopics />
                    
                    <p className="text-gray-600 text[16px] sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore natus adipisci ullam. Veritatis quas
                        tempora minima laudantium corporis nulla sequi expedita vitae vel nihil eaque magnam consectetur, ratione
                        eveniet.
                    </p>

                    <div className="space-x-2">
                        <a
                            href="#"
                            className="inline-block px-4 py-2 border-2 border-[#e92f05] text-[#e92f05] rounded-xl text-md font-medium hover:bg-[#f44300] hover:text-white transition"
                        >
                            Cari Kelas
                        </a>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 border-2 border-[#e92f05] bg-[#e92f05] text-white rounded-xl text-md font-medium hover:bg-white hover:text-[#e92f05] transition"
                        >
                            Bergabung Sekarang
                        </a>
                    </div>
                </div>
            </section>
            </div>
  );
};

export default HeroSection;
