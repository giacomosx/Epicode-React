import Logo from "./logo/Logo";
import Navlist from "./navlist/Navlist";

const TopNavbar = () => {
  return (
    <nav className=" bg-body-tertiary y-2 navbar navbar-expand-lg " id="navbar" >
      <div className="py-1 d-flex justify-content-between w-100 container-lg">
        <Logo logoAlt={'Logo Brand'} logoSrc={'./logo-296.svg'} brandName={'Epibooks'}/>
        <Navlist className=" w-auto "/>
      </div>
    </nav>
  );
};

export default TopNavbar;
