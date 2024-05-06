import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Category from './pages/Category';
import Book from "./pages/Book";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path={'/category/:categoryName'} element={<Category />} />
          <Route path={'/book/:asin'} element={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
