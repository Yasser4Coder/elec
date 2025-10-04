import "./App.css";
import About from "./components/About";
import AppSection from "./components/AppSection";
// import Activities from "./components/Activities";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinForm from "./components/JoinForm";
// import Memories from "./components/Memories";
import OurTeam from "./components/OurTeam";
import logos from "./images/logos.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <AppSection /> */}

      <div className=" relative">
        <About />
        <div className=" absolute w-[20%] z-40 2xl:bottom-[-400px] xl:bottom-[-300px] lg:bottom-[-250px] md:bottom-[-180px] bottom-[-100px]">
          <img src={logos} alt="" />
        </div>
      </div>
      <Event />
      {/* <Memories /> */}
      <OurTeam />
      {/* <Activities /> */}
      <JoinForm />
      <Footer />
    </div>
  );
}

export default App;
