import React, { useState } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    flowerColor: "red",
    quantity: 1,
    deliveryTime: "",
  });

  const [availableTimes, setAvailableTimes] = useState([
    "10:00", "12:00", "14:00", "16:00", "18:00",
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Užsakymas priimtas!");
    setAvailableTimes(availableTimes.filter(time => time !== formData.deliveryTime));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Užsakymo forma</h1>
      <input type="text" name="name" placeholder="Vardas" onChange={handleChange} required />
      <input type="email" name="email" placeholder="El. paštas" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Telefonas" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Pristatymo adresas" onChange={handleChange} required />

      <label>Gėlių spalva:</label>
      <select name="flowerColor" onChange={handleChange}>
        <option value="red">Raudona</option>
        <option value="pink">Rožinė</option>
        <option value="white">Balta</option>
        <option value="lightpink">Rausva</option>
      </select>

      <label>Kiekis:</label>
      <input type="number" name="quantity" onChange={handleChange} min="1" required />

      <label>Pristatymo laikas:</label>
      <select name="deliveryTime" onChange={handleChange} required>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <button type="submit">Pateikti užsakymą</button>
    </form>
  );
}      

export default OrderForm;
