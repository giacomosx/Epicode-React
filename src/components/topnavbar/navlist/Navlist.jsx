import React, { useState } from "react";
import ToggleBtn from "../togglebtn/ToggleBtn";
import "./navlist.css";
import ToggleTheme from "../../toogletheme/ToggleTheme";
import MainButton from "../../mainbutton/MainButton";

const navLinks = [
  { title: "Fantasy", selector: "#fantasy" },
  { title: "History", selector: "#history" },
  { title: "Horror", selector: "#horror" },
  { title: "Romance", selector: "#romance" },
  { title: "Sci-fi", selector: "#sci-fi" },
];

const Navlist = ({showSidebar, setShowSidebar}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setShowSidebar(!showSidebar)

  const showMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-2 d-lg-none">
        <MainButton onClick={handleClick} className="fs-3 p-0 lh-1"><ion-icon name="chatbox-ellipses-outline"></ion-icon></MainButton>
        <ToggleBtn onClick={showMenu} />
        <ToggleTheme variant={'lh-1 d-lg-none'} />
      </div>
      <div className={` navbar-collapse flex-grow-0 ${visible ? "show" : ""} `}>
        <ul className=" navbar-nav ">
          {navLinks.map((item, index) => (
            <li className=" nav-item main-nav-links" key={index}>
              <a href={item.selector} className="text-white nav-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navlist;
