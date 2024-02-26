import "./App.css";
import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";

function App() {
  return (
    <div className=" bg-cover bg-center main-div ">
      <div className=" gradient-overlay">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
