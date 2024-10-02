import Image from "next/image";
import img1 from "../../../js.png";
import img2 from "../../../typescript.png";
import img3 from "../../../html-5.png";
import img4 from "../../../youtube.png";
import Navbar from "../components/navbar";

export default function BestPlants() {
    return (
        <div>
            <Navbar />

            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                            <b>Best Planting Skills of Technology</b>
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image src={img1} alt="JavaScript" className="h-[200px] w-[200px] lg:w-[450px]" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">
                                        <b>JAVASCRIPT</b>
                                    </h2>
                                    <p className="mb-4 text-pink-500">
                                        JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image src={img2} alt="TypeScript" className="h-[200px] w-[200px]" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">
                                        <b>TYPESCRIPT</b>
                                    </h2>
                                    <p className="mb-4 text-pink-500">
                                        TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image src={img3} alt="HTML 5" className="h-[200px] w-[200px]" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">
                                        <b>HTML 5</b>
                                    </h2>
                                    <p className="mb-4 text-pink-500">
                                        Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image src={img4} alt="YouTube Creator" className="h-[200px] w-[200px] lg:w-[450px]" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">
                                        <b>YOUTUBE Creator</b>
                                    </h2>
                                    <p className="mb-4 text-pink-500">
                                        YouTube is an American online video sharing platform owned by Google. Accessible worldwide, YouTube was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of PayPal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
