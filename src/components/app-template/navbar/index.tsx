import { Styles } from "./styles";
import { Link, useLocation } from "react-router-dom";
import CustomBtn from "../../common/buttons/CustomBtn";
import { navbarTabs } from "./navbar-tabs";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";

const SiteNavbar = () => {
  const location = useLocation();
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsNavbarExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Styles>
      <Navbar
        expand="lg"
        className={isNavbarExpanded ? "active" : ""}
        onToggle={handleToggle}
        expanded={isNavbarExpanded}
      >
        <div className="logo">lOGO</div>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <div className="tabs">
              {navbarTabs?.map((item, idx) => (
                <Link
                  to={item?.link}
                  key={idx}
                  className={`hover-link ${
                    location.pathname === item?.link ? "active" : ""
                  }`}
                >
                  {item?.name}
                </Link>
              ))}
            </div>
            <div className="login">
              <CustomBtn text="Login" width="110px" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default SiteNavbar;
