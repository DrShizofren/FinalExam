import axios from "axios";
import React, { useEffect, useState } from "react";
import "./flowerspricing.css";

const FlowersPricing = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3030/").then((res) => setData(res.data));
  }, []);

  console.log(data);
  return (
    <section className="flowerpricingpage">
      <p className="green">Devoted to wonderfull beauty</p>
      <h1 className="green">Flowers Pricing</h1>
      <div className="cards">
        {data
          ? data.map((elem) => {
              return (
                <div className="card" key={elem._id}>
                  <img src={elem.img} alt="" />
                  <h1>{elem.name}</h1>
                  <p>{elem.price}</p>
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default FlowersPricing;
