import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const register = async (e) => {
    e.preventDefault(); // ✅ VERY IMPORTANT

    try {
      const res = await axios.post("https://backend-drt7.onrender.com/api/login", {
        name,
        email,
        password
      });

      console.log(res.data); // ✅ debug
      alert("Registered Successfully");
      nav("/login"); // better than "/"

    } catch (err) {
      console.log(err.response?.data || err.message); // ✅ show real error
      alert("Register failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}