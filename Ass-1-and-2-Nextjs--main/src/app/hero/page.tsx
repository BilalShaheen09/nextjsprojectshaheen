import Image from "next/image";
import img2 from "../../../HD1.png";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font" id="hero">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl lg:text-5xl mb-4 font-bold text-gray-900">
            <b>BILAL SHAHEEN</b>
          </h1>
          <p className="mb-8 leading-relaxed text-white"> {/* Added text-white class */}
            <b>Front-end development focuses on creating the visual and interactive aspects of a website that users directly engage with. It involves translating design concepts into code, ensuring a seamless user experience across different devices and screen sizes.</b>
          </p>
          
          {/* Stylish Social Media Links */}
          <div className="flex justify-center space-x-4 mt-4">
            {[
              { href: "https://www.linkedin.com/in/bilal-shaheen-437016244/", icon: <FaLinkedinIn />, bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
              { href: "https://github.com/BilalShaheen09", icon: <FaGithub />, bgColor: "bg-gray-900", hoverColor: "hover:bg-gray-800" },
              { href: "https://www.instagram.com/", icon: <FaInstagram />, bgColor: "bg-pink-600", hoverColor: "hover:bg-pink-700" },
              { href: "https://www.twitter.com", icon: <FaTwitter />, bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500" }
            ].map(({ href, icon, bgColor, hoverColor }, index) => (
              <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${bgColor} ${hoverColor} transition duration-300`}>
                  <span className="text-white">{icon}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src={img2}
            alt="Bilal Shaheen"
            className="h-[400px] w-[385px] rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
