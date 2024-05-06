import React from "react";
import { useSelector } from "react-redux";
import { actualTheme } from "../../redux/themeSlice";
import { allBooks } from "../../redux/booksSlice";

const BookDetails = ({asin}) => {
  const isDark = useSelector(actualTheme)
  const books = useSelector(allBooks)

  const book = books.find(book => book.asin === asin)


  return (
    <div className="col-12 col-lg-9">
      <div className="row pt-5 ">
          <h3 className={`${isDark && 'text-white'} mb-4`}>{book.title}</h3>
        <div className="col-12 col-md-6 d-flex flex-column mb-3 ">
          <img src={book.img} alt="" className="rounded"/>
        </div>
        <div className="col-12 col-md-6 ">
            <ul className="list-group ">
              <li className={`${isDark && 'text-white bg-dark border-0'} list-group-item `}>
                  <span className=" text-secondary ">Category: </span>
                  {book.category}
              </li>
              <li className={`${isDark && 'text-white bg-dark border-0'} list-group-item `}>
                  <span className=" text-secondary ">Asin: </span>
                  {book.asin}
              </li>
              <li className={`${isDark && 'text-white bg-dark border-0'} list-group-item `}>
                  <span className=" text-secondary ">Price: </span>
                  {book.price}&nbsp;$
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
