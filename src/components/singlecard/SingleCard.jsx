import React from "react";
import IconButton from "../iconbutton/IconButton";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarSlice";
import "./singlecard.css";

const SingleCard = ({ img, title }) => {
  const dispatch = useDispatch();

  return (
    <div className={`border-0 card h-100  shadow-sm flex-row g-0 rounded-4 `}>
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
            <h5 className={`card-title h6 pt-1`}>{title}</h5>

            <div
              className={`card-action d-flex justify-content-end border-top pe-1 gap-3 `}
            >
              <IconButton
                iconName={"ellipsis-vertical"}
                onClick={() => dispatch(toggleSidebar())}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
