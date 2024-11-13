import { Styles } from "./styles";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import FacebookImage from "../../../assets/images/footer/facebook.png";
import InstagramImage from "../../../assets/images/footer/instagram.png";
import LinkedinImage from "../../../assets/images/footer/linkedin.png";

const Footer = () => {
  return (
    <Styles>
      <footer className="inner-section">
        <Container>
          <div className="info">
            <div className="logo">lOGO</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur. Fermentum tellus amet
              egestas eu nisi ultricies euismod varius Lorem ipsum dolor sit
              amet consectetur. Fermentum tellus amet egestas eu nisi ultricies
              euismod varius. Lorem ipsum dolor sit amet consectetur. Fermentum
              tellus amet egestas eu nis
            </div>
          </div>
          <div className="data">
            <div className="item">
              <div className="title">Quick Links</div>
              <Link to="/">Home</Link>
              <Link to="/ads">Ads</Link>
              <Link to="/products">Product</Link>
            </div>
            <div className="item">
              <div className="title">Additional Links</div>
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms of Use</Link>
            </div>
            <div className="item">
              <div className="title">Contact Us</div>
              <a href="tel:(+45)54455487845">
                <BiPhone />
                (+45)54455487845
              </a>
              <a href="mailto:info-comany.com">
                <MdOutlineEmail />
                info-comany.com
              </a>
              <a>
                <SlLocationPin />
                Our Fritz Road 3,44649 Herne{" "}
              </a>
            </div>
            <div className="item">
              <div className="title">Find Us </div>
              <div className="social-links">
                <a>
                  <img src={FacebookImage} alt="facebook" />
                </a>
                <a>
                  <img src={InstagramImage} alt="facebook" />
                </a>
                <a>
                  <img src={LinkedinImage} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </Container>
        <div className="copyright">All Rights Reseved in 2024</div>
      </footer>
    </Styles>
  );
};

export default Footer;
