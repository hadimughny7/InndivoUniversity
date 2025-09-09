import React from "react";
import IconCommunity from "../../../assets/icon/IconCommunity.png";
import BannerCommunity from "../../../assets/img/BannerCommunity.png";

const CommunitySection: React.FC = () => {
  return (
    <section className="section-5 py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-5xl font-bold text-[#202020]">
            Jadi Bagian Dari Komunitas
          </h1>
          <h1 className="text-2xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#e92f05] to-[#f5af19] bg-clip-text text-transparent">
            Inndivo University
          </h1>
        </div>

        {/* Content (kiri–kanan, sama kayak TestimonialSection) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          {/* Left: Features */}
          <div className="flex-1 max-w-[320px] w-full text-left order-1 lg:order-1">
            {/* Forum Diskusi */}
            <div className="flex items-start gap-6 mb-5">
              <div className="bg-[#ffe8e0] p-4 sm:p-3 rounded-full flex justify-center items-center">
                <img
                  src={IconCommunity}
                  alt="Forum Diskusi"
                  className="w-8 sm:w-6 h-8 sm:h-6"
                />
              </div>
              <div>
                <p className="font-bold text-[#333] text-lg sm:text-base">
                  Forum Diskusi
                </p>
                <p className="text-md sm:text-md text-[#555]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            <hr className="my-5 border-t border-[#ddd]" />

            {/* Webinar */}
            <div className="flex items-start gap-6">
              <div className="bg-[#ffe8e0] p-4 sm:p-3 rounded-full flex justify-center items-center">
                <img
                  src={IconCommunity}
                  alt="Webinar"
                  className="w-8 sm:w-6 h-8 sm:h-6"
                />
              </div>
              <div>
                <p className="font-bold text-[#333] text-lg sm:text-base">
                  Webinar
                </p>
                <p className="text-md sm:text-md text-[#555]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>

          {/* Middle: Image */}
          <div className="flex-1 max-w-[500px] w-full order-2 lg:order-2 flex justify-center">
            <img
              src={BannerCommunity}
              alt="Komunitas Belajar"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right: Join Box */}
          <div className="flex-1 max-w-[330px] w-full order-3 lg:order-3 text-center lg:text-left">
            <h4 className="text-2xl font-semibold text-[#333] mb-2">
              Lorem ipsum dolor sit amet,
            </h4>
            <p className="text-md text-[#555] mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="inline-block bg-[#e92f05] text-white px-6 py-2 border-2 border-[#e92f05] rounded-md font-semibold hover:bg-white hover:text-[#e92f05] transition"
            >
              Bergabung sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
