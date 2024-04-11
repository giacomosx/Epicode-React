import {Container, Navbar} from "react-bootstrap";
import Logo from "../logo/Logo";
import Navlist from "../navlist/Navlist";

const TopNavbar = () => {
  return (
    <Navbar expand="lg" className=" bg-body-tertiary  py-2">
      <Container className="py-1">
        <Logo logoAlt={'Logo Brand'} logoSrc={'./logo-296.svg'} brandName={'Epibooks'}/>
        <Navlist />
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
