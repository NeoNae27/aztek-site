import Hero from "../templates/Hero/Hero.jsx";
import About from "../layouts/About/About.jsx";
import Services from "../layouts/Services/Service.jsx";
import Projects from "../layouts/Projects/Projects.jsx";
import Contacts from "../layouts/Contacts/Contacts.jsx";
import Footer from "../layouts/Footer/Footer.jsx";

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
