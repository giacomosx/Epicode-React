import React from "react";
import CommentArea from "../commentarea/CommentArea";
import { CloseButton, Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, sidebarState } from "../../redux/sidebarSlice";
import { currentBook } from "../../redux/bookSelectedSlice";
import { actualTheme } from "../../redux/themeSlice";
import { useParams } from "react-router-dom";
import LatestRelease from "../latestrelease/LatestRelease";


const Sidebar = () => {
  const showSidebar = useSelector(sidebarState);
  const dispatch = useDispatch();
  const isDark = useSelector(actualTheme)

  const param = useParams()


  const currentBookSelected = useSelector(currentBook);

  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`col-lg-3 right-0 ${!param.asin && 'pt-5'}`}>
      <Offcanvas
        show={showSidebar}
        onHide={handleClick}
        placement="end"
        responsive="lg"
        className={`${isDark ? 'bg--light-black' : ''}`}
      >
        <Offcanvas.Header>
          <Offcanvas.Title className={`${isDark ? 'text-white ' : ''}`}>Book reviews:</Offcanvas.Title>
          {isDark ? <CloseButton onClick={handleClick} variant='white' /> : <CloseButton onClick={handleClick} />}
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-column pt-4 px-1 ">
          <div className="pt-4">
            <h3 className={`h4 pt-2 mt-2 mb-3 d-none d-lg-block ${isDark && 'text-white '}`}>
              Book reviews:
            </h3>
            <div className={`p-2 rounded ${isDark ? 'bg-dark' : 'bg-white '}`}>
              {!currentBookSelected && (
                <h6 className={`${isDark && 'text-white'}`}>Select a book to see all reviews!</h6>
              )}
              {currentBookSelected && <CommentArea />}
            </div>
          </div>
            <LatestRelease />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
