import "./App.css";
import { Navbar } from "./components";
import NewsLetter from "./containers/NewsLetter";
import About from "./containers/About";
import What2do from "./containers/What2do";
import Footer from "./containers/Footer";
import Gallery from "./containers/Gallery";
import Intro from "./containers/Intro";
import Blog from "./containers/Blog";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <What2do />
      <Intro />
      <Blog />
      <Gallery />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
