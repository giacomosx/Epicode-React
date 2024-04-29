import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import CommentArea from "../allthebooks/singlecard/commentarea/CommentArea";
import CommentsList from "../allthebooks/singlecard/commentslist/CommentsList";

const Sidebar = ({ idBook, showSidebar, setShowSidebar }) => {
  const handleClose = () => setShowSidebar(false);

  return (
    <div className="col-lg-3 position-fixed ">
      <Offcanvas show={showSidebar} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-column pt-4">
          {idBook && (
            <>
              <CommentsList idBook={idBook} />
              <CommentArea idBook={idBook} />
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
