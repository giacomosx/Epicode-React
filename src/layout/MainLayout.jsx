import React, {useEffect, useState} from "react";
import TopNavbar from "../components/topnavbar/TopNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import OverlayButton from "../components/overlaybutton/OverlayButton";

const MainLayout = ({ children }) => {
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBtnVisible(true);
      } else {
        setBtnVisible(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 10) {
          setBtnVisible(true);
        } else {
          setBtnVisible(false);
        }
      })
    }

  }, [])

  return (
    <>
      <TopNavbar />
      <div className={`container-xxl mb-4`} id="navbar">
        <div className="row pt-3 ">
          {children}
          <Sidebar />
        </div>
      </div>
      <Footer />
      {btnVisible && <OverlayButton selector={"#navbar"} />}
    </>
  );
};

export default MainLayout;
