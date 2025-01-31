const Footer = () => {
  return (
    <section>
      <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <a href="#" aria-label="Home">
                <img
                  src="src/assets/f2black hor.svg"
                  alt="F2 Computers Logo"
                  className="w-36"
                />
              </a>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                At F2 Computers, we specialize in expert repair and maintenance
                services for all major laptop brands.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#about"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#service"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#contact"
                >
                  {" "}
                  Contact Us{" "}
                </a>
              </li>
            </ul>
            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
              Copyright &copy; 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
