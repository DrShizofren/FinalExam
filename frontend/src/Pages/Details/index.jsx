import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3030/").then((res) => setData(res.data));
  }, []);

  return <>
      Details
      
    </>
};

export default Details;
