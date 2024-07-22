import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Cras ac ligula quis turpis imperdiet convallis. Proin facilisis leo
          euismod, mattis tortor sit amet, rhoncus urna. Ut vehicula suscipit
          dui, et vestibulum dolor tempor non. Pellentesque vestibulum, enim a
          tempus volutpat, urna velit fringilla justo, id porta quam quam eu
          purus. Aenean rhoncus facilisis mattis. In imperdiet orci vitae risus
          placerat tincidunt. Ut lobortis velit sed est mollis sodales.
        </p>
        <p>
          Pellentesque tristique finibus eleifend. Etiam maximus porta
          facilisis. Curabitur posuere volutpat mollis. Ut vel erat aliquam,
          efficitur augue eget, aliquet magna
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
