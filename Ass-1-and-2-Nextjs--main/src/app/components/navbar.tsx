import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 bg-pink-200 body-font" id="navbar">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold">SHAHEEN</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-bold lg:gap-5 justify-center">
            <Link href="/" className="mr-5 hover:text-pink-600">Home</Link>
            <Link href="/about" className="mr-5 hover:text-pink-600">About</Link>
            <Link href="/bestPlants" className="mr-5 hover:text-pink-600">Skills</Link>
            <Link href="/benefits" className="mr-5 hover:text-pink-600">Experience</Link>
            <Link href="/contact" className="mr-5 hover:text-pink-600">Contact Us</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
