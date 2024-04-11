import React from "react";
import fantasy from "../../books/fantasy.json";
import {Row, Col} from "react-bootstrap";
import CustomCard from "../customcard/CustomCard";

const Allbooks = ({ sectionTitle }) => {
  return (
    <section>
      <Row className="py-3">
        <Col>
          <h3>{sectionTitle}</h3>
        </Col>
      </Row>
      <Row xs={1} md={3} lg={6} className="g-4">
        {fantasy.map((book, idx) => (
          <CustomCard
            key={`book-${idx}`}
            title={book.title}
            img={book.img}
            price={book.price}
          />
        ))}
      </Row>
    </section>
  );
};

export default Allbooks;
