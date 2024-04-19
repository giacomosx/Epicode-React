import Logo from "./logo/Logo";
import Navlist from "./navlist/Navlist";

const TopNavbar = () => {
  return (
    <nav className="bg--violet y-2 navbar navbar-expand-lg shadow-sm" id="navbar" >
      <div className="py-1 d-flex justify-content-between w-100 container-lg">
        <Logo logoAlt={'Logo Brand'} logoSrc={'./logo-296.svg'} brandName={'EpiBooks'}/>
        <Navlist className=" w-auto "/>
      </div>
    </nav>
  );
};

export default TopNavbar;
