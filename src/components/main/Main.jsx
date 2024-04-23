import React, { useContext, useState } from "react";
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
import Btntop from "../btntop/Btntop";
import { ThemeContext } from "../../contexts/ThemeContext";

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
  const [results, setResults] = useState([]);
  const [btnVisible, setBtnVisible] = useState(false)

  const {isDark} = useContext(ThemeContext)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10 ) {
      setBtnVisible(true)
    } else {
      setBtnVisible(false)
    }
  })

  return (
    <div fluid="xxl" className={`container-xxl mb-4`}>
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
              isDark={isDark}
            />
            <SearchForm setresult={setResults} allbooks={allBooks} />
          </div>
        </div>
      </Hero>
      {results.length > 0 && (
        <AllTheBooks maxResults={30} sectionTitle={"Results"} data={results} isDark={isDark} />
      )}
      {allCategories.map((category, index) => (
        <AllTheBooks
          key={`section-${index}`}
          maxResults={6}
          sectionTitle={category.title}
          data={category.data}
          isDark={isDark}
        />
      ))}
      {btnVisible && <Btntop selector={'#navbar'}/>}
    </div>
  );
};

export default Main;
