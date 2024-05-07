import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Hero from "../hero/Hero";
import SwiperComp from "../hero/swipercomp/SwiperComp";
import HeroClaim from "../hero/heroclaim/HeroClaim";
import SearchForm from "../hero/searchform/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import AllTheBooks from "../allthebooks/AllTheBooks";
import { allBooks, getAllBooks, booksLoading } from "../../redux/booksSlice";
import SearchResults from "../searchresults/SearchResults";


const Main = () => {
  const books = useSelector(allBooks);
  const dispatch = useDispatch();
  const isLoading = useSelector(booksLoading);

  useEffect(() => {
    dispatch(getAllBooks("https://epibooks.onrender.com/"));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center w-100 vh-100 align-items-center ">
          <Spinner animation="grow" className="color--violet" />
        </div>
      )}
      {!isLoading && books && (
        <>
          <Hero>
            <div className="col-12 col-md-6">
              {/* <SwiperComp
                data={books.filter((book) => book.category === "fantasy")}
              /> */}
            </div>
            <div className="col-12 col-md-6 order-first order-md-last ">
              <div className="p-3 d-flex flex-column align-items-center justify-content-center h-100">
                <HeroClaim
                  title={"Welcome to EpiBooks!"}
                  claim={
                    "Discover, read, love. The books you desire, just a click away."
                  }
                />
                <SearchForm />
              </div>
            </div>
          </Hero>
          <div className="col-12 col-lg-9">
            <SearchResults />
            <AllTheBooks
              maxResults={50}
              sectionTitle={"All the books"}
              data={books}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
