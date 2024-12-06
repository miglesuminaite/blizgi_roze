import React, { useState } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    flowerColor: "red",
    quantity: 1,
    deliveryDate: "",
    deliveryTime: "",
    paymentMethod: "elBankininkyste",
    comment: "",
  });

  const [availableTimes, setAvailableTimes] = useState([
    "10:00", "12:00", "14:00", "16:00", "18:00",
  ]);

  const flowerPrices = {
    red: 2,
    pink: 2.5,
    white: 2,
    lightpink: 3,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ačiū už užsakymą! Jūsų užsakymas buvo priimtas.`);
    setAvailableTimes(availableTimes.filter((time) => time !== formData.deliveryTime));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Užsakymo forma</h1>
      
      {/* Vardas */}
      <input
        type="text"
        name="name"
        placeholder="Vardas"
        onChange={handleChange}
        required
      />

      {/* El. paštas */}
      <input
        type="email"
        name="email"
        placeholder="El. paštas"
        onChange={handleChange}
        required
      />

      {/* Telefonas */}
      <input
        type="tel"
        name="phone"
        placeholder="Telefonas"
        onChange={handleChange}
        required
      />

      {/* Pristatymo adresas */}
      <input
        type="text"
        name="address"
        placeholder="Pristatymo adresas"
        onChange={handleChange}
        required
      />

      {/* Gėlių spalva */}
      <label>Gėlių spalva:</label>
      <select name="flowerColor" onChange={handleChange}>
        <option value="red">Raudona</option>
        <option value="pink">Rožinė</option>
        <option value="white">Balta</option>
        <option value="lightpink">Rausva</option>
      </select>

      {/* Kiekis */}
      <label>Kiekis:</label>
      <input
        type="number"
        name="quantity"
        onChange={handleChange}
        min="1"
        required
      />

      {/* Kainos rodymas */}
      <p>
        Kaina:{" "}
        {formData.quantity * flowerPrices[formData.flowerColor]} €
      </p>

      {/* Pristatymo data ir laikas */}
      <label>Pristatymo data:</label>
      <input
        type="date"
        name="deliveryDate"
        onChange={handleChange}
        required
      />

      <label>Pristatymo laikas:</label>
      <select name="deliveryTime" onChange={handleChange} required>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* Apmokėjimo būdas */}
      <label>Pasirinkite apmokėjimo būdą:</label>
      <select name="paymentMethod" onChange={handleChange} required>
        <option value="elBankininkyste">El. bankininkystė</option>
        <option value="kortele">Mokėjimo kortelė</option>
        <option value="pristatymoMetu">Pristatymo metu</option>
      </select>

      {/* Komentarai */}
      <label>Komentarai:</label>
      <textarea
        name="comment"
        placeholder="Jūsų komentaras..."
        onChange={handleChange}
      />

      {/* Pateikimo mygtukas */}
      <button type="submit">Apmokėti ir užsakyti</button>
    </form>
  );
}

export default OrderForm;
