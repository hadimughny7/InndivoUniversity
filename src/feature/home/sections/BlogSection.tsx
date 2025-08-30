import React from "react";
import BlogCard1 from "../../../assets/img/BlogCard1.png"
import BlogCard2 from "../../../assets/img/BlogCard2.png"
import BlogCard3 from "../../../assets/img/BlogCard3.png"

const BlogSection: React.FC = () => {
    return (
        <div>
            {/* SECTION 6 */}
            <section className="section-6 py-16 bg-gradient-radial from-gray-300 to-white">
                <div className="container max-w-[1200px] mx-auto px-4">
                    {/* Header  */}
                    <div className="section-6-header flex flex-col lg:flex-row items-start justify-between mb-10 gap-6">
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
                    <div className="blog-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ img: BlogCard1 }, { img: BlogCard2 }, { img: BlogCard3 }].map((item, index) => (
                            <div key={index} className="blog-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
                                <img
                                    src={item.img}
                                    alt="AI News"
                                    className="blog-img w-[413px] h-[230px] object-cover mx-auto"
                                />
                                <div className="blog-content p-4">
                                    <h4 className="font-semibold text-lg mb-2">Lorem ipsum dolor sit amet</h4>
                                    <p className="text-gray-700 text-sm mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className="blog-footer flex justify-between items-center">
                                        <div className="blog-author flex items-center gap-2">
                                            <img src="" alt="Breaking News" className="w-9 h-9 object-cover rounded-full" />
                                            <span className="text-sm font-semibold text-gray-800">Breaking News</span>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn-outline-orange inline-block px-4 py-2 border-1 border-[#e92f05] text-[#e92f05] rounded-lg font-medium transition hover:bg-[#e92f05] hover:text-white text-[12px]"
                                        >
                                            Baca selengkapnya
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                </div>
            </section>
        </div>
    );
};

export default BlogSection;
