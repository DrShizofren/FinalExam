import React from "react";
import "../../Assets/global.css";
import "./home.css";
import FlowersPricing from "../../Components/FlowersPricing";

const Home = () => {
  return (
    <>
      <section className="header">
        <div className="overlaydiv">
          <p>Floral</p>
          <h1>Excellent bouquets for you</h1>
        </div>
      </section>

      <section className="hero">
        <div className="herobanner">
          <div className="herobannerright">
            <h1>Our mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex velit
              commodi repellat laboriosam placeat distinction
            </p>
            <button>Read More</button>
          </div>
          <div className="herobannerleft">
            <img src="/src/Assets/Images/b4.jpg" alt="" />
          </div>
        </div>
      </section>
      <FlowersPricing/>
    </>
  );
};

export default Home;
