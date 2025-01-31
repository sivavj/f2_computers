import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
