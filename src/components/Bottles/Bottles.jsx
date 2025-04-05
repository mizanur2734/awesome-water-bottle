import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setcart] = useState([]);
  const bottles = use(bottlesPromise);

  const handleAddCart = (bottle) => {
    console.log("bottle will be added to the added", bottle);
  };

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddCart={handleAddCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
