import React from "react";
import "./App.css";
import Productinfo1 from "./productinfo1";
import Productinfo2 from "./Productinfo2";
import Productinfo3 from "./Productinfo3";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="hero">
          <Productinfo1 />
          <Productinfo2 />
          <Productinfo3 />
        </section>
        <section className="featured-products"></section>
      </main>
      <footer>
        <p>&copy; 2024 My E-Commerce Store</p>
      </footer>
    </div>
  );
}

export default App;
