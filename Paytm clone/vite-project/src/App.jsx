import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/banner";
import Services from "./Components/Services";
import Loginmodal from "./Components/Loginmodal";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./index.css"; 

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Navbar openModal={() => setModalOpen(true)} />
      <Banner />
      <Services />
      <Main />
      <Footer/>
      <Loginmodal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
    </div>
  );
};

export default App;

