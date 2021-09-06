import Link from "next/link";
import Style from "./Header.module.css";
import Image from "next/image";
import Logo from "../../public/images/Logo.webp";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className={Style.Logo}>
          <Image src={Logo} width={60} height={60} />
        </Navbar.Brand>

        <Navbar.Toggle
          className="toggle-btn"
          aria-controls="responsive-navbar-nav"
        />

        <Navbar.Collapse
          className={Style.Navbar + " collapse"}
          id="responsive-navbar-nav"
        >
          <p className={Style.p}>Products</p>
          <p className={Style.p}>Products</p>
          <p className={Style.p}>Info</p>
          <p className={Style.p}>Benifits</p>
          <p className={Style.p}>Store</p>
        </Navbar.Collapse>
      </Navbar>

      {/*<Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <div className={Style.Logo}>
            <Link href="/">
              <Image className={Style.Logo_img} src={Logo} />
            </Link>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          className="toggle-btn"
          aria-controls="responsive-navbar-nav"
        />

        <Navbar.Collapse className="collapse" id="responsive-navbar-nav">
          <div className={Style.Navbar}>
            <Nav className="Navbar">
              <p className={Style.p}>Products</p>
              <p className={Style.p}>Products</p>
              <p className={Style.p}>Info</p>
              <p className={Style.p}>Benifits</p>
              <p className={Style.p}>Store</p>
            </Nav>
          </div>
        </Navbar.Collapse>
</Navbar>*/}
    </div>
  );
}
