import ThemeButton from "../themebutton/ThemeButton";
import Logo from "./logo/Logo";
import Navlist from "./navlist/Navlist";

const TopNavbar = ({showSidebar, setShowSidebar}) => {

  return (
    <nav className={`py-2 navbar navbar-expand-lg shadow-sm bg--violet position-fixed z-3  w-100`}  >
      <div className="py-1 d-flex justify-content-between w-100 container-fluid">
        <Logo logoAlt={'Logo Brand'} logoSrc={'./logo-296.svg'} brandName={'EpiBooks'}/>
        <Navlist showSidebar={showSidebar} setShowSidebar={setShowSidebar} className=" w-auto "/>
        <ThemeButton variant={'lh-1 hover-up d-none d-lg-block'}/>
      </div>
    </nav>
  );
};

export default TopNavbar;
