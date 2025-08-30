import React from "react";
import IconCommunity from "../../../assets/icon/IconCommunity.png"
import BannerCommunity from "../../../assets/img/BannerCommunity.png"


const CommunitySection: React.FC = () => {
    return (
        <div>
            <section className="section-5 py-16 bg-white text-center">
                <div className="container max-w-[1200px] mx-auto px-4">
                    {/* Header */}
                    <div className="section-5-header">
                        <h1 className="text-2xl sm:text-5xl font-bold text-[#202020]">
                            Jadi Bagian Dari Komunitas
                        </h1>
                        <h1 className="highlight text-2xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#e92f05] to-[#f5af19] bg-clip-text text-transparent mb-8">
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
                        <div className="join-box flex-1 max-w-[330px] text-center md:text-left order-3 md:order-3 w-full md:w-auto">
                            <h4 className="text-2xl font-semibold text-[#333] mb-2">
                                Lorem ipsum dolor sit amet,
                            </h4>
                            <p className="text-md text-[#555] mb-6 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#"
                                className="btn-orange inline-block bg-[#e92f05] text-white px-6 py-2 border-2 border-[#e92f05] rounded-md font-semibold hover:bg-white hover:text-[#e92f05] transition mx-auto md:mx-0"
                            >
                                Bergabung sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommunitySection;
