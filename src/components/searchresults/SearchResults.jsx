import React from "react";
import AllTheBooks from "../allthebooks/AllTheBooks";
import { useSelector } from "react-redux";
import { searchResults } from "../../redux/booksSlice";

const SearchResults = () => {
  const results = useSelector(searchResults);

  return (
    <>
      {results.length > 0 && (
        <AllTheBooks maxResults={100} sectionTitle={"Results"} data={results} />
      )}
    </>
  );
};

export default SearchResults;
