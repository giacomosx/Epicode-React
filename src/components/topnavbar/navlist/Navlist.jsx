import React, { useState } from "react";
import ToggleBtn from "../togglebtn/ToggleBtn";
import ThemeButton from "../../themebutton/ThemeButton";
import "./navlist.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../redux/sidebarSlice";

const navLinks = [
  { title: "Fantasy", selector: "#fantasy" },
  { title: "History", selector: "#history" },
  { title: "Horror", selector: "#horror" },
  { title: "Romance", selector: "#romance" },
  { title: "Sci Fi", selector: "#sci-fi" },
];

const Navlist = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const showMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-2 d-lg-none">
        <ThemeButton variant={"lh-1 d-lg-none"} />
        <button
          className={`btn pb-0 px-1 lh-1 icon-button color-white`}
          onClick={() => dispatch(toggleSidebar())}
        >
          <ion-icon name="chatbox"></ion-icon>
        </button>

        <ToggleBtn onClick={showMenu} />
      </div>
      <div className={` navbar-collapse flex-grow-0 ${visible ? "show" : ""} `}>
        <ul className=" navbar-nav ">
          {navLinks.map((item, index) => (
            <li className=" nav-item main-nav-links" key={index}>
              <Link
                to={"/category/" + item.title}
                className="text-white nav-link"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navlist;
