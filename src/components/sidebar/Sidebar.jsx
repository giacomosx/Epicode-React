import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, sidebarState } from "../../redux/sidebarSlice";

const Sidebar = () => {

    const showSidebar = useSelector(sidebarState)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(toggleSidebar())
    }

  return (
    <div className="col-lg-3 position-fixed right-0">
      <Offcanvas show={showSidebar} onHide={handleClick} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Book reviews:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-column pt-4 px-2 ">
          <div className="bg-white rounded fs-5 mt-3 p-2">
            {" "}
            Select a title to read the reviews!
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
