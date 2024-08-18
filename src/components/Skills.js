import { Container , Row , Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../images/meter1.svg";
import meter2 from "../images/meter2.svg";
import meter3 from "../images/meter3.svg";
import meter4 from "../images/meter3.svg";
import colorSharp from "../images/color-sharp.png";



export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>I have a solid foundation in Java development with experience in J2EE and SQL. Proficient in React and JavaScript, I excel at building interactive UIs and dynamic web applications. My skills include designing user-friendly interfaces, problem-solving, and adapting to new technologies to enhance software functionality and user experience.

</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={meter1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <img src={meter4} alt="Image" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
      )
 
}