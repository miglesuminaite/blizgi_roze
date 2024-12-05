import React, { useState } from "react";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "password") {
      alert("Sėkmingai prisijungėte!");
    } else {
      alert("Netinkami prisijungimo duomenys.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Administratoriaus prisijungimas</h1>
      <input type="text" name="username" placeholder="Vartotojo vardas" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Slaptažodis" onChange={handleChange} required />
      <button type="submit">Prisijungti</button>
    </form>
  );
}

export default AdminLogin;
