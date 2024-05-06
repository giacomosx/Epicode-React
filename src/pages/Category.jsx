import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllTheBooks from "../components/allthebooks/AllTheBooks";
import { useSelector } from "react-redux";
import { allBooks } from "../redux/booksSlice";


const Category = () => {
  const { categoryName } = useParams();
  
  const books = useSelector(allBooks)

  return (
    <MainLayout>
      <div className="col-12 col-lg-9">
        <AllTheBooks
          sectionTitle={`${categoryName}`}
          data={books.filter(book => book.category === categoryName.split(' ').join('').toLowerCase())}
          maxResults={50}
        />
      </div>
    </MainLayout>
  );
};

export default Category;
