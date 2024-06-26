import React from "react";
import {Row, Col} from "react-bootstrap";
import SingleCard from "../singlecard/SingleCard";
import { currentBook } from "../../redux/bookSelectedSlice";
import { actualTheme } from "../../redux/themeSlice";
import { useSelector } from "react-redux";

const AllTheBooks = ({ sectionTitle, data, maxResults, borderTop, borderBottom }) => { 
  const currentBookSelected = useSelector(currentBook)
  const isDark = useSelector(actualTheme)
  return (
    <section id={`${sectionTitle.split(' ').join('-').toLowerCase()}`} className="py-4">
      <Row className={`${borderTop && 'border-top'} ${borderBottom && 'border-bottom'} pt-4 `}>
        <Col className="d-flex justify-content-between align-items-center ">
          <h3 className={`h2 ${isDark && 'text-white '}`}>{sectionTitle}</h3>
        </Col>
      </Row>
      <Row xs={1} md={2} xl={3}  className=" pt-4 row-gap-4 ">
        {data.slice(0,maxResults).map((book, indx) => (
          <Col key={'card-'+ indx}>
            <SingleCard
            title={book.title}
            img={book.img}
            price={book.price}
            bookId={book.asin}
            asin={book.asin}
            currentBookSelected={currentBookSelected}

          />
          </Col>
))}
      </Row>
    </section>
  );
};

export default AllTheBooks;
