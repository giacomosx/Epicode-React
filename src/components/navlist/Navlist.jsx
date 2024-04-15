import React, {useState } from "react";
import ToggleBtn from "../togglebtn/ToggleBtn";
import "./navlist.css";

const navLinks = [
  { title: "Fantasy", selector: "#fantasy" },
  { title: "History", selector: "#history" },
  { title: "Horror", selector: "#horror" },
  { title: "Romance", selector: "#romance" },
  { title: "Sci-fi", selector: "#sci-fi" },
];

const Navlist = () => {
  const [visible, setVisible] = useState(false);

  const showMenu = () => {
    setVisible(!visible);
  }

  return (
    <>
      <ToggleBtn onClick={showMenu} />

      <div
        className={`navbar-collapse flex-grow-0 ${
          visible ? 'show' : ''
        } `}
        >
        <ul className=" navbar-nav ">
          {navLinks.map((item, index) => (
            <li className="nav-item text-bg-light main-nav-links" key={index}>
              <a href={item.selector} className="text-black nav-link">
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
