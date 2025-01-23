import axios from "axios";
import "./index.css";
import "../../Assets/global.css";
import React, { useEffect, useState } from "react";
const URL = "http://localhost:3030/"

const FlowersTable = () => {
  const [data, setData] = useState();
  const [showsortedData, setShowSortedData] = useState(false);
  const inputHandler = (value) => {
    const newData = data.filter(x => x.name.includes(value))
    setData(newData)
  }
  const getData = () => {
      axios.get(URL).then((res) => setData(res.data));
  }

  useEffect(() => {
    getData()
  }, []);
  const removeItem = (e) => {
    axios.delete(URL + e).then(() => console.log("deleted"))
    getData()
  }
  const sortHandler = () => {
    setShowSortedData(!showsortedData)
    getData()
  }

//   console.log(data);
  return (
    <>
    <input type="text" onChange={(e) => inputHandler(e.target.value)}/>
    <button onClick={() => sortHandler()}>Sort by price</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? 
            showsortedData ? data.sort((a, b) => a.price - b.price).map((elem) => {
                return <tr key={elem._id}>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
                <td><button onClick={() => {
                    removeItem(elem._id)
                }}>Delete</button></td>
              </tr>
              })
            : data.map((elem) => {
                return <tr key={elem._id}>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
                <td><button onClick={() => {
                    removeItem(elem._id)
                }}>Delete</button></td>
              </tr>
              }) : null}
        </tbody>
      </table>
    </>
  );
};

export default FlowersTable;
