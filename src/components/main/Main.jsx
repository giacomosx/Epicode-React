import React, { useEffect } from "react";
import Hero from "../hero/Hero";
import SwiperComp from "../hero/swipercomp/SwiperComp";
import HeroClaim from "../hero/heroclaim/HeroClaim";
import SearchForm from "../hero/searchform/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import AllTheBooks from "../allthebooks/AllTheBooks";
import { allBooks, getAllBooks } from "../../redux/booksSlice";
import SearchResults from "../searchresults/SearchResults";

const Main = () => {
  const books = useSelector(allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks("https://epibooks.onrender.com/"));
  }, []);

  return (
    <>
      <Hero>
        <div className="col-12 col-md-6">
          <SwiperComp
            data={books.filter((book) => book.category === "romance")}
          />
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
      <div className="col-12 ">
        <SearchResults />
        <AllTheBooks
          maxResults={50}
          sectionTitle={"All the books"}
          data={books}
        />
      </div>
    </>
  );
};

export default Main;
