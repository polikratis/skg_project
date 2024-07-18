import "./App.css";
import { Navbar } from "./components";
import Header from "./containers/Header";
import About from "./containers/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
}

export default App;
