import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/navbar";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";
import Contact from "./Components/Contact";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About />
      <Skills/>
      <Contact/>
    </div>
    
  );
}

export default App;
