import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/items", {
      headers: { Authorization: token }
    });

    setItems(res.data);
  };

  useEffect(() => {
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