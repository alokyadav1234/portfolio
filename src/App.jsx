import About from "./component/About/About";
import Navbar from "./component/Navbar";
import Services from "./component/Services/Services";
import Hero from "./component/Hero/Hero";
import Contact from "./component/Contact/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      {/* <MyWork /> */}
    </>
  );
};

export default App;
