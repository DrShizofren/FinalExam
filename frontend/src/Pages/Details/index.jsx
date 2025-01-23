import axios from "axios";
import React, { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3030/").then((res) => setData(res.data));
  }, []);

  console.log(data);

  return <>
    {
      data ? 
      data.map((elem) => {
        return <div key={elem.id}>
          <h1>{elem.name}</h1>
          <p>{elem.price}</p>
          <img src={elem.img} alt="" />
        </div>
      }) : ''
    }
  </>
    

};

export default Details;
