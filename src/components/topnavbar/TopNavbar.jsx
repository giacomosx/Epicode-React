import ThemeButton from "../themebutton/ThemeButton";
import Logo from "./logo/Logo";
import Navlist from "./navlist/Navlist";

const TopNavbar = () => {

  return (
    <nav className={`py-2 navbar navbar-expand-lg shadow-sm bg--violet w-100`} id="navbar" >
      <div className="py-1 d-flex justify-content-between w-100 container-xxl">
        <Logo logoAlt={'Logo Brand'} logoSrc={'/logo-296.svg'} brandName={'EpiBooks'}/>
        <Navlist className=" w-auto "/>
        <ThemeButton variant={'lh-1  d-none d-lg-block'}/>
      </div>
    </nav>
  );
};

export default TopNavbar;
