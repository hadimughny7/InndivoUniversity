import React from "react";
import BannerSection2 from "../../../assets/img/BannerSection2.png";
import IconCommunity from "../../../assets/icon/IconCommunity.png"
import IconMentor from "../../../assets/icon/IconMentor.png"
import IconKurikulum from "../../../assets/icon/IconKurikulum.png"

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

const FeatureSection = () => {
  return (
    <section className="section-2 pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                        {/* Text + Feature */}
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-[black]">
                                <span className="text-[#E92F05] "> Belajar & Berkembang <br /></span>
                                Bangun Kualitas Terbaikmu <br /> Bersama Kami
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
  );
};

export default FeatureSection;
