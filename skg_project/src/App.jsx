import "./App.css";
import { Navbar } from "./components";
import Header from "./containers/Header";
import About from "./containers/About";
import What2do from "./containers/What2do";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <What2do />
    </>
  );
}

export default App;
