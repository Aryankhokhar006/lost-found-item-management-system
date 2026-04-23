import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "https://backend-drt7.onrender.com/api/items",
        {
          headers: { Authorization: token }
        }
      );

      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

 useEffect(() => {
  const fetchItems = async () => {
    const res = await axios.get("https://backend-drt7.onrender.com/api/items", {
      headers: { Authorization: token }
    });

    setItems(res.data);
  };

  fetchItems();
}, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {items.map((item) => (
        <div key={item._id}>
          <h3>{item.itemName}</h3>
          <p>{item.description}</p>
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  );
}