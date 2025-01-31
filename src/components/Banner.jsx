const Banner = () => {
  return (
    <section
      id="#"
      className="relative bg-[url(src/assets/computer_service_bg.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Your Trusted
            <strong className="block font-extrabold text-rose-500">
              {" "}
              Laptop Repair Experts{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            F2 Computers offers expert repair and maintenance for all major
            laptop brands, including screen repairs, battery replacements, and
            system upgrades. Our skilled technicians provide fast, reliable, and
            affordable solutions to keep your device at peak performance. Trust
            us to keep you connected and productive!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#contact"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
