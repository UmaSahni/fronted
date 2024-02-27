import "./App.css";
import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";
import Products from "./Componets/Products";
import Token from "./Componets/Token";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className=" bg-cover bg-center main-div ">
      <div className=" gradient-overlay">
        <Navbar />
        <Hero />
        <Products />
        <Token/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
