const AboutUs = () => {
  return (
    <section id="about">
      <div className="bg-gray-100 px-4 py-12 lg:flex lg:h-screen lg:items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div>
            <img
              src="/assets/f2logo black.svg"
              alt="Placeholder Image"
              className="rounded-lg object-contain w-56 h-56 mx-auto sm:w-full sm:h-full"
            />
          </div>
          <div className="text-left">
            <h2 className="text-gray-800 text-4xl text-center font-bold mb-6 border-b-2 border-rose-500 pb-2">
              About Us
            </h2>
            <p className="mb-4 text-md text-gray-800">
              At F2 Computers, we are passionate about providing top-notch
              laptop repair and maintenance services to keep you connected and
              productive. With years of experience and a team of skilled
              technicians, we specialize in resolving hardware and software
              issues for all major laptop brands.
            </p>
            <p className="mb-4 text-md text-gray-800">
              Our mission is to deliver fast, reliable, and cost-effective
              solutions while maintaining the highest standards of quality and
              customer service. From screen replacements and battery upgrades to
              system troubleshooting and performance optimization, we’ve got you
              covered.
            </p>
            <p className="text-md text-gray-800">
              At F2 Computers, your satisfaction is our priority. We aim to
              build lasting relationships through transparent communication,
              expert care, and dependable results. Whether you&apos;re a
              student, professional, or business owner, you can count on us to
              keep your laptops running smoothly.
            </p>
            <p className="text-md text-gray-800">
              Trust F2 Computers —your reliable partner for all laptop repair
              needs!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
