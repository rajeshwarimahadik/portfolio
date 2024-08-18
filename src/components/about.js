import { Col, Container, Row } from "react-bootstrap";
import colorSharp2 from "../images/color-sharp2.png";

export const About = () => {
  return (
    <footer className="footer" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Rajeshwari Mahadik</h2>
            <p>Address: 226,Ingole Nagar, Hudkeshwar Road, Near Punyadham mandir Nagpur 440034</p>
            <p>Mobile:<a href="tel:+91 9552278996">+91 9552278996</a>
            </p>
            <p>Email: <a href="mailto:rajeshwarimahadik36@gmail.com">rajeshwarimahadik36@gmail.com</a></p>
          </Col>
          <Col md={6} className="text-md-end">
            

            <a href="./rajeshwari_mahadik_resume_18_08_24.pdf" download="Rajeshwari_Mahadik_CV.pdf" className="btn btn-primary">Download CV</a>
           
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp2} alt="Background" />
    </footer>
  );
};

