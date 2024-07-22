import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_prices={item.new_price}
                old_prices={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="productCategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
