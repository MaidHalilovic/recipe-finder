import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLHeadingElement>,
    path: string
  ) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <h1 onClick={(e) => handleClick(e, "/")}>Eat Well</h1>
      </div>
      <div className='pages'>
        <h3 onClick={(e) => handleClick(e, "/category")}>Category</h3>
      </div>
    </div>
  );
};

export default Header;
