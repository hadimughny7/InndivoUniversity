import React from "react";
import BlogCard1 from "../../../assets/img/BlogCard1.png"
import BlogCard2 from "../../../assets/img/BlogCard2.png"
import BlogCard3 from "../../../assets/img/BlogCard3.png"

const BlogSection: React.FC = () => {
    return (
        <section className="section-3 pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            {/* Header */}
            <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-8 lg:gap-10 px-4 mb-12">
                <div className="text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e92f05] to-[#f5af19]">
                        Berita Populer
                    </h1>
                    <h2 className="text-5xl font-bold text-gray-900 mt-2">Saat Ini</h2>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-gray-600 text-md max-w-[550px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            {/* Blog Cards */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 px-4">
                {/* Blog Cards */}
                <div className="blog-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {[{ img: BlogCard1 }, { img: BlogCard2 }, { img: BlogCard3 }].map(
                        (item, index) => (
                            <div
                                key={index}
                                className="blog-card bg-white rounded-xl shadow-lg 
                   w-[413px] h-[496px] 
                   max-sm:w-[90%] max-sm:h-auto"
                            >
                                <img
                                    src={item.img}
                                    alt="AI News"
                                    className="blog-img w-[413px] h-[230px] object-cover mx-auto 
                     max-sm:w-full max-sm:h-[200px] rounded-t-xl"
                                />
                                <div className="blog-content p-4">
                                    <h4 className="font-semibold text-[24px] mb-4 max-sm:text-[18px]">
                                        Lorem ipsum dolor sit amet
                                    </h4>
                                    <p className="text-gray-700 text-[16px] mb-6 max-sm:text-[14px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className="blog-footer flex justify-between items-center">
                                        <div className="blog-author flex items-center gap-2">
                                            <img
                                                src=""
                                                alt="Breaking News"
                                                className="w-9 h-9 object-cover rounded-full max-sm:w-8 max-sm:h-8"
                                            />
                                            <span className="text-[16px] font-bold text-gray-800 max-sm:text-[14px]">
                                                Breaking News
                                            </span>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn-outline-orange inline-block px-4 py-2 
                         border-1 border-[#e92f05] text-[#e92f05] rounded-lg font-medium 
                         transition hover:bg-[#e92f05] hover:text-white text-[12px] 
                         max-sm:px-3 max-sm:py-1"
                                        >
                                            Baca selengkapnya
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Button Explore */}
            <div className="explore-blog text-center mt-12">
                <a
                    href="#"
                    className="btn-outline-orange inline-block px-6 py-3 border-1 border-[#e92f05] text-[#e92f05] rounded-lg font-medium transition hover:bg-[#e92f05] hover:text-white"
                >
                    Eksplor selengkapnya
                </a>
            </div>
        </section>

    );
};

export default BlogSection;
