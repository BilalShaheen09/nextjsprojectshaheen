import Image from "next/image";
import about from "../../../aboutus.jpg";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <section className="text-gray-400 body-font">
      <Navbar />

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src={about}
            alt="plant"
            className="h-[400px] w-[400px] rounded-lg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About us
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-white"> {/* Added text-white class */}
            The About Us page of your website is an essential source of information for anyone who wants to know more about your business.
            <br />
            It is where you showcase your history, the unique value of your work, your mission and vision, and the audiences you serve.
          </p>
          {/* Removed the button here */}
        </div>
      </div>
    </section>
  );
}
