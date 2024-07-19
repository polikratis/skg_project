import "./App.css";
import { Navbar } from "./components";
import Header from "./containers/Header";
import About from "./containers/About";
import What2do from "./containers/What2do";
import Footer from "./containers/Footer";
import Gallery from "./containers/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <What2do />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
