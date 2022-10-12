import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
