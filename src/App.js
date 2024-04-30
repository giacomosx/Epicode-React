import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import TopNavbar from "./components/topnavbar/TopNavbar";
import OverlayButton from "./components/overlaybutton/OverlayButton";
import { useState } from "react";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  });

  return (
    <>
      <TopNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className={`container-fluid mb-4 pt-5`} id="navbar">
        <div className="row pt-3 ">
          <Main />
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
      </div>
      <Footer />
      {btnVisible && <OverlayButton selector={"#navbar"} />}
    </>
  );
};

export default App;
