const Services = () => {
  const services = [
    {
      id: 1,
      title: "Laptop Dealer",
      description:
        "Authorized dealer offering a wide range of laptops to suit your personal and professional needs. Explore top brands and the latest models with competitive pricing and excellent customer support.",
      image: "src/assets/laptop_dealer.svg",
    },
    {
      id: 2,
      title: "Laptop Service Provider",
      description:
        "Expert laptop service and repair solutions tailored to keep your device running smoothly. From hardware fixes to software troubleshooting, we ensure quality service for all major laptop brands.",
      image: "src/assets/service_provider.svg",
    },
    {
      id: 3,
      title: "Server Provider",
      description:
        "Reliable server solutions tailored to your business needs. We provide high-performance servers with scalable options, ensuring seamless operations and robust data management.",
      image: "src/assets/server_provider.svg",
    },
    {
      id: 4,
      title: "All Brands of Computers, CCTV, Printers and More",
      description:
        "Explore top-tier brands for computers, CCTV systems, printers, and more. Whether it's the latest tech or essential office equipment, we provide reliable solutions for both home and business needs.",
      image: "src/assets/accessories.svg",
    },
    {
      id: 5,
      title: "Networking",
      description:
        "Explore top-tier networking products including routers, switches, and firewalls for home and business needs. We offer reliable solutions to ensure seamless connectivity and enhanced security.",
      image: "src/assets/networking.svg",
    },
    {
      id: 6,
      title: "Accessories Sales & Services",
      description:
        "Explore top-quality accessories for all your devices, including phone cases, keyboards, headsets, and more. We provide expert sales and service support to enhance your tech experience.",
      image: "src/assets/sales_service.svg",
    },
  ];
  return (
    <section id="service">
      <div className="bg-gray-800 py-8 px-6 lg:flex lg:h-screen lg:items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-50 border-b-2 border-rose-500 pb-2 sm:text-4xl text-2xl font-extrabold text-center mb-16">
            Discover Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center bg-gray-300 text-gray-800 p-6 rounded-lg hover:scale-105 hover:shadow-xl transition-all hover:bg-rose-500 hover:text-white duration-300"
              >
                <div className="mb-4 bg-gray-100 p-2 rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
