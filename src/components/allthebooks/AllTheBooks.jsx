import React from "react";
import {Row, Col} from "react-bootstrap";
import SingleCard from "./singlecard/SingleCard";
import Btntop from "./btntop/Btntop";

const AllTheBooks = ({ sectionTitle, data, maxResults }) => { 
  return (
    <section id={`${sectionTitle.toLowerCase().split().join('-')}`} className="py-4">
      <Row className="border-top pt-4">
        <Col className="d-flex justify-content-between align-items-center ">
          <h3 className="h2">{sectionTitle}</h3>
          <Btntop selector={'#navbar'} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={5} xl={6} className="g-3 pt-4 ">
        {data.slice(0,maxResults).map((book, idx) => (
          <Col key={`book-${idx}`}>
            <SingleCard
            title={book.title}
            img={book.img}
            price={book.price}
          />
          </Col>
))}
      </Row>
    </section>
  );
};

export default AllTheBooks;
