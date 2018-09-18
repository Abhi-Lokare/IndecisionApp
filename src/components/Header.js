import React from "react";

//Header StateLess Component
const Header = props => (
  <div className="header">
    {/* Using data in components body */}
    <div className=" container">
      <h1 className="header__title">{props.title}</h1>
      <h1 className="header__subtitle">{props.subTitle}</h1>
    </div>
  </div>
);
//Setting Default Props if nothing passed
Header.defaultProps = {
  title: "ANY DEFAULT TITLE"
};

export default Header;
