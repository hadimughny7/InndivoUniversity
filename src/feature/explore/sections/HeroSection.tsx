import React from "react";
import VisualObject from "../../../assets/img/Visual Object.png"
import IconUser from "../../../assets/icon/Frame 67.png"

const Explore: React.FC = () => {
    return (
        <section
            id="home"
            className="flex flex-col justify-center lg:flex-row items-center bg-no-repeat bg-cover bg-center relative px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16 lg:py-20"
        >
            <div className="max-w-2xl space-y-4 text-left lg:text-left">
                <h1 className="font-bold text-[#3E3E3E] leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Temukan Kursus yang <br />
                    Tepat untuk Mendukung <br /> Proses{" "}
                    <span className="text-[#E92F05]">Belajarmu</span>
                </h1>

                <p className="text-gray-600 text-1xl sm:text-2xl md:text-[24px] leading-relaxed">
                    Dilengkapi dengan materi interaktif dan pengalaman belajar modern,
                    Inndivo University siap jadi teman tumbuhmu
                </p>

                <div className="space-x-2">
                    <a
                        href="#"
                        className="inline-block px-4 py-2 border-2 border-[#e92f05] bg-[#e92f05] text-white rounded-xl text-md font-medium hover:bg-white hover:text-[#e92f05] transition"
                    >
                        Explore Now
                    </a>
                </div>
                <div className="flex space-x-8">
                    {/* Item 1 */}
                    <div className="text-center">
                        <h2 className="text-[36px] font-bold text-[#E92F05]">100+</h2>
                        <p className="text-gray-600 text-[18px] font-medium">Kursus Tersedia</p>
                    </div>

                    {/* Item 2 */}
                    <div className="text-center">
                        <h2 className="text-[36px] font-bold text-[#E92F05]">20+</h2>
                        <p className="text-gray-600 text-[18px] font-medium">Negara Dijangkau</p>
                    </div>
                </div>
            </div>

            {/* Bagian Kanan */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
                {/* Gambar Utama */}
                <img
                    src={VisualObject}
                    alt="Pengajar Profesional"
                    className="rounded-2xl w-[250px] sm:w-[320px] md:w-[380px] lg:w-[447px] h-auto object-cover"
                />

                {/* Card Kiri Atas */}
                <div className="absolute top-0 left-0 -translate-x-[40%] md:-translate-x-[30%] -translate-y-1/4 bg-white shadow-md rounded-xl p-2 md:p-3 flex items-start gap-2
  w-[150px] md:w-[252px]"
                >
                    <img
                        src="/assets/icon/thumbs-up.png"
                        alt="Icon"
                        className="w-4 h-4 md:w-6 md:h-6"
                    />
                    <div>
                        <h3 className="font-bold text-[#3E3E3E] text-[10px] md:text-[18px]">
                            Pengajar Profesional
                        </h3>
                        <p className="text-[#3E3E3E] text-[8px] md:text-[14px]">
                            Praktisi berpengalaman siap membimbingmu.
                        </p>
                    </div>
                </div>

                {/* Card Kanan Bawah */}
                <div className="absolute bottom-0 right-0 translate-x-[25%] md:translate-x-[15%] translate-y-1/4 bg-white shadow-md rounded-xl p-2 md:p-3 flex flex-col items-center gap-1 md:gap-2
  w-[180px] md:w-[260px]"
                >
                    <div className="flex -space-x-1 md:-space-x-2">
                        <img
                            src={IconUser}
                            alt="User"
                            className="w-[140px] h-[40px] md:w-[217px] md:h-[58px] rounded-full border-2 border-white"
                        />
                    </div>

                    <p className="text-[10px] md:text-[16px] text-gray-700 leading-tight text-center md:text-left">
                        10.000+ pelajar dari berbagai <br /> negara telah bergabung
                    </p>
                </div>

            </div>
        </section>

    );
};

export default Explore;