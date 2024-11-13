import { Styles } from "./styles";
import { Container } from "react-bootstrap";
import HeaderBg from "../../../assets/images/banner/headerimg.jpg";
import Ellipse from "../../../assets/images/banner/Ellipse.png";
import CustomBtn from "../buttons/CustomBtn";

const DynamicBanner = () => {
  return (
    <Styles>
      <div className="bg-img">
        <img src={HeaderBg} alt="header" />
      </div>
      <div className="bg-shape">
        <img src={Ellipse} alt="header" />
      </div>
      <header>
        <Container>
          <div className="title">Welcome to</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue
            amet non elit vel purus. Auctor aenean ut euismod at integer id
            nulla cursus te
          </div>
          <CustomBtn text="Contact Us" />
        </Container>
      </header>
    </Styles>
  );
};

export default DynamicBanner;
