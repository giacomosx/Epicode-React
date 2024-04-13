import {Container, Navbar} from "react-bootstrap";
import Logo from "../logo/Logo";
import Navlist from "../navlist/Navlist";

const TopNavbar = () => {
  return (
    <Navbar expand="lg" className=" bg-body-tertiary  py-2" id="navbar" >
      <Container className="py-1 d-flex justify-content-between w-100">
        <Logo logoAlt={'Logo Brand'} logoSrc={'./logo-296.svg'} brandName={'Epibooks'}/>
        <Navlist className=" w-auto "/>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
