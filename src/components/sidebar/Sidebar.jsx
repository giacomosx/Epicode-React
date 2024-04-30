import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import CommentsList from "../allthebooks/singlecard/commentslist/CommentsList";
import CommentArea from "../allthebooks/singlecard/commentarea/CommentArea";

const Sidebar = ({ idBook, showSidebar, setShowSidebar, setIdBook }) => {
  const handleClose = () => setShowSidebar(false);


  return (
    <div className="col-lg-3 position-fixed right-0">
      <Offcanvas show={showSidebar} onHide={handleClose} responsive="lg" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Book reviews:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-column pt-4 px-2 ">
          {idBook ? (
            <>
              <CommentsList idBook={idBook} />
              <CommentArea idBook={idBook} setIdBook={setIdBook} />
            </>
          ) :(
            <>
              <div className="bg-white rounded fs-5 mt-3 p-2"> Select a title to read the reviews!</div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
