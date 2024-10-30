import "./App.css";
import About from "./components/About";
// import Activities from "./components/Activities";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinForm from "./components/JoinForm";
import Memories from "./components/Memories";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Event />
      {/* //// */}
      <Memories />
      <OurTeam />
      {/* <Activities /> */}
      <JoinForm />
      <Footer />
    </div>
  );
}

export default App;
