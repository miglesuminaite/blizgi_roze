import React from "react";
import redRoses from '../assets/images/roze1.jpg';
import darkpinkRoses from '../assets/images/roze2.jpg';
import whiteRoses from '../assets/images/roze3.jpg';
import lightpinkRoses from '../assets/images/roze6.jpg';

const products = [
  { id: 1, name: "Raudonos rožės", price: "2€", description: "Raudonos rožės mylimajai", image: redRoses },
  { id: 2, name: "Tamsiai rožinės rožės", price: "2.5€", description: "Tamsiai rožinės rožės Valentino dienai", image: darkpinkRoses },
  { id: 3, name: "Baltos rožės", price: "2€", description: "Baltos rožės vestuvėms", image: whiteRoses },
  { id: 4, name: "Šviesiai rožinės rožės", price: "2.5€", description: "Šviesiai rožinės rožės gimtadieniams", image: lightpinkRoses },
];

function ProductCatalog() {
  return (
    <div>
      <h1>Prekių katalogas</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} style={{ width: "200px", height: "auto" }} />
          <p>Kaina (vnt.): {product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;
