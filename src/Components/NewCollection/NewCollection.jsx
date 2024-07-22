import React from "react";
import "./NewCollection.css";
import newCollection from "../assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>New Items</h1>
      <hr />
      <div className="collection">
        {newCollection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_prices={item.old_price}
              new_prices={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
