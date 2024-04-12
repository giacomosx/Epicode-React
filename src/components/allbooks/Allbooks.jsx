import React from "react";
import {Row, Col} from "react-bootstrap";
import CustomCard from "../customcard/CustomCard";

const Allbooks = ({ sectionTitle, data }) => {
  return (
    <section>
      <Row className="py-3">
        <Col>
          <h3>{sectionTitle}</h3>
        </Col>
      </Row>
      <Row xs={1} md={3} lg={5} className="g-3">
        {data.map((book, idx) => (
          <Col key={`book-${idx}`}>
            <CustomCard
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

export default Allbooks;
