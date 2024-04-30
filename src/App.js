import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import TopNavbar from "./components/topnavbar/TopNavbar";
import OverlayButton from "./components/overlaybutton/OverlayButton";
import { useState } from "react";

const App = () => {
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
      <TopNavbar />
      <div className={`container-xxl mb-4`} id="navbar">
        <div className="row pt-3 ">
          <Main />
        </div>
      </div>
      <Footer />
      {btnVisible && <OverlayButton selector={"#navbar"} />}
    </>
  );
};

export default App;
