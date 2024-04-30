import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import TopNavbar from "./components/topnavbar/TopNavbar";
import Btntop from "./components/btntop/Btntop";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState } from "react";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [btnVisible, setBtnVisible] = useState(false);
  const [idBook, setIdBook] = useState('')

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  });

  return (
    <ThemeProvider>
      <TopNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className={`container-fluid mb-4 pt-5`} id="navbar">
        <div className="row pt-3 ">
        <Main setIdBook={setIdBook} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} idBook={idBook} setIdBook={setIdBook}/>
        </div>
      </div>
      <Footer />
      {btnVisible && <Btntop selector={"#navbar"} />}
    </ThemeProvider>
  );
};

export default App;
