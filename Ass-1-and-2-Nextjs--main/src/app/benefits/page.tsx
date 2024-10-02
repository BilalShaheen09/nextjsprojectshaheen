import { GoArrowRight } from "react-icons/go";
import Navbar from "../components/navbar";

export default function Benefits() {
    return (
        <div>
            <Navbar />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                            Experience the Benefits of Tech
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/4">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                   <b> Youtube content</b>
                                </h2>
                                <p className="leading-relaxed text-base">
                                Content Creation: Produced and edited engaging video content for a rapidly growing YouTube channel, focusing on tech tutorials and product reviews. Successfully grew subscriber base by over 50% in six months through consistent uploads and targeted marketing.
                                </p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">
                                  
                                    <GoArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                   <b> Youtube Editior</b>
                                </h2>
                                <p className="leading-relaxed text-base">
                                Analytics and Growth Strategy: Utilized YouTube Analytics to track video performance and audience demographics, refining content strategy to target high-engagement topics. Achieved a 200% increase in video views by optimizing titles, descriptions, and thumbnails for better visibility.
                                </p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">
                                    
                                    <GoArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    <b>Wordpress</b>
                                </h2>
                                <p className="leading-relaxed text-base">
                                E-Commerce Solutions: Developed and maintained e-commerce websites using WooCommerce, configuring payment gateways and product management systems. Enhanced user experience through custom checkout processes and user-friendly navigation, leading to a significant increase in sales conversions.
                                </p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">
                                   
                                    <GoArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    <b>Bloging</b>
                                </h2>
                                <p className="leading-relaxed text-base">
                                Content Creation and Strategy: Authored over 100 blog posts on various topics, focusing on SEO-friendly content that resonates with the target audience. Developed a content calendar that streamlined publishing and improved audience engagement, resulting in a 60% increase in monthly visitors.
                                </p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">
                                  
                                    <GoArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
