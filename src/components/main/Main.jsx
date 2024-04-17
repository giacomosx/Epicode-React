import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Hero from "../hero/Hero";
import SwiperComp from "../hero/swipercomp/SwiperComp";
import HeroClaim from "../hero/heroclaim/HeroClaim";
import SearchForm from "../hero/searchform/SearchForm";
import AllTheBooks from "../allthebooks/AllTheBooks";

import fantasy from "../../data/books/fantasy.json";
import history from "../../data/books/history.json";
import horror from "../../data/books/horror.json";
import romance from "../../data/books/romance.json";
import scifi from "../../data/books/scifi.json";

const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
const allCategories = [
  { data: fantasy, title: "Fantasy" },
  { data: history, title: "History" },
  { data: horror, title: "Horror" },
  { data: romance, title: "Romance" },
  { data: scifi, title: "Sci-fi" },
];

let randomCategory = allCategories[Math.round(Math.random() * allCategories.length)].data;

const Main = () => {
  let [results, setResults] = useState([]);
  return (
    <Container fluid="lg" className="mb-4">
      <Hero>
        <div className="col-12 col-md-6">
          <SwiperComp data={randomCategory} />
        </div>
        <div className="col-12 col-md-6 order-first order-md-last ">
          <div className="p-3 d-flex flex-column align-items-center justify-content-center h-100">
            <HeroClaim
              title={"Welcome to EpiBooks!"}
              claim={
                "Discover, read, love. The books you desire, just a click away."
              }
            />
            <SearchForm setresult={setResults} allbooks={allBooks} />
          </div>
        </div>
      </Hero>
      {results.length > 0 && (
        <AllTheBooks maxResults={30} sectionTitle={"Results"} data={results} />
      )}
      {allCategories.map((category, index) => (
        <AllTheBooks
          key={`section-${index}`}
          maxResults={12}
          sectionTitle={category.title}
          data={category.data}
        />
      ))}
    </Container>
  );
};

export default Main;
