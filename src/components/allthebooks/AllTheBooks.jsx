import React from "react";
import {Row, Col} from "react-bootstrap";
import SingleCard from "./singlecard/SingleCard";

const AllTheBooks = ({ sectionTitle, data, maxResults, isDark }) => { 
  return (
    <section id={`${sectionTitle.toLowerCase().split().join('-')}`} className="py-4">
      <Row className={`border-top pt-4 ${isDark && 'border-secondary '}`}>
        <Col className="d-flex justify-content-between align-items-center ">
          <h3 className={`h2 ${isDark && 'text-white'}`}>{sectionTitle}</h3>
        </Col>
      </Row>
      <Row xs={1} md={2} xl={3}  className=" pt-4 row-gap-4 ">
        {data.slice(0,maxResults).map((book, idx) => (
          <Col key={`book-${idx}`}>
            <SingleCard
            title={book.title}
            img={book.img}
            price={book.price}
            bookId={book.asin}
          />
          </Col>
))}
      </Row>
    </section>
  );
};

export default AllTheBooks;
