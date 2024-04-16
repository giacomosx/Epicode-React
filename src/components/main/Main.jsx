import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Hero from "../hero/Hero";
import AllTheBooks from "../allthebooks/AllTheBooks";

import fantasy from "../../data/books/fantasy.json";
import history from "../../data/books/history.json";
import horror from "../../data/books/horror.json";
import romance from "../../data/books/romance.json";
import scifi from "../../data/books/scifi.json";

const Main = () => {

  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
  let [results, setResults] = useState([])

  return (
    <Container fluid="lg" className="mb-4">
      <Hero setresults={setResults} allbooks={allBooks}/>
      <AllTheBooks maxResults={30} sectionTitle={"Results"} data={results} />
      <AllTheBooks maxResults={10} sectionTitle={"Fantasy"} data={fantasy} />
      <AllTheBooks maxResults={10} sectionTitle={"History"} data={history} />
      <AllTheBooks maxResults={10} sectionTitle={"Horror"} data={horror} />
      <AllTheBooks maxResults={10} sectionTitle={"Romance"} data={romance} />
      <AllTheBooks maxResults={10} sectionTitle={"Sci-fi"} data={scifi} />
    </Container>
  );
};

export default Main;
