import React from "react";
import IconButton from "../iconbutton/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarSlice";
import { selectABook } from "../../redux/bookSelectedSlice";
import "./singlecard.css";
import { useNavigate } from "react-router-dom";
import { actualTheme } from "../../redux/themeSlice";

const SingleCard = ({ img, title, asin, currentBookSelected }) => {
  const navigate = useNavigate();
  const isDark = useSelector(actualTheme)
  let selected = currentBookSelected === asin;

  const dispatch = useDispatch();

  const selectBook = () => {
    dispatch(selectABook(asin));
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`border-0 card h-100 flex-row g-0 rounded-4 ${
        selected ? "shadow--violet" : "shadow-sm "
      } ${isDark && 'bg-dark'}`}
      aria-selected={selected}
      data-testid='card'
    >
      <div className="row">
        <div className="col-4 pe-0">
          <div className="card-img h-100 ">
            <img
              src={img}
              alt={title}
              className="w-100 h-100 object-fit-cover img-fluid rounded-start-4  "
            />
          </div>
        </div>
        <div className="col-8 ps-0 pe-2">
          <div className="h-100 card-body p-2 d-flex flex-column  justify-content-between">
            <h5 className={`card-title h6 pt-1 ${isDark && 'text-bg-dark '}`}>{title}</h5>

            <div
              className={`card-action d-flex justify-content-end border-top pe-1 gap-3 ${isDark && 'border-secondary '} `}
            >
              <IconButton iconName={"chatbox-outline"} onClick={selectBook} />
              <IconButton
                iconName={"information-circle-outline"}
                onClick={() => {
                  navigate("/book/" + asin)
                  dispatch(selectABook(asin))
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
