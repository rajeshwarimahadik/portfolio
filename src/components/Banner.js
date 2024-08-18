import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../images/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const toRotate = ["Java Developer", "Web Designer", "Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text,delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0 , text.length - 1):fullText.substring(0,text.length + 1);

    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500)
    }


  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5 }>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi I'am Rajeshwari and I am a passionate`} <span className="wrap"><br />{text}</span>
            </h1>
            <p>
            I am Rajeshwari Mahadik, an aspiring software developer with a background in Mechanical Engineering and a passion for Java development. Currently enhancing my skills with a Java Development course from Qspiders Thane, I have experience in JavaScript and am eager to explore opportunities in frontend technologies and web development.
            </p>
            
            <button onClick={() => window.location.href = "#connect"}>
                       Let's connect
                      <ArrowRightCircle size={25} />
            </button>

          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
