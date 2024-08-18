import {Col , Container , Row, TabContent ,Tab, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../images/color-sharp2.png";
import projImg1 from "../images/project-img.png";
import projImg2 from "../images/project-img2.png";
import projImg3 from "../images/project-img3.png";
import Nav from 'react-bootstrap/Nav';
export const Projects = () => {
    const projects = [
        {
            title: "Netflix Clone",
            description: "A responsive Netflix clone built with modern web technologies, focusing on design and frontend development.",
            imgUrl: projImg1,
            linkUrl: "https://neflixclonebyrajeshwari.netlify.app/", 
        },
        {
            title: "Alpha | HTML5 UP",
            description: "Developed a sleek, user-friendly application with a focus on intuitive design and seamless user experience.",
            imgUrl: projImg2,
            linkUrl: "https://rajeshwarimahadik.github.io/AlphaH5-Clone/",
          
        },
        {
            title: "Drum Kit Player",
            description: "This project showcases how to utilize JavaScript event listeners to capture user interactions and play corresponding audio clips, creating an engaging and responsive musical experience.",
            imgUrl: projImg3,
            linkUrl: "https://rajeshwarimahadik.github.io/Drum_Kit/",
        }
    ]

        return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>
                    Welcome to my project section, where I showcase a variety of work demonstrating my skills in JavaScript, React, HTML, and CSS. I have developed responsive user interfaces, integrated APIs, and built robust backend systems using Java. Each project reflects my dedication to creating seamless and efficient digital experiences.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Frontend Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Backend Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third" >
                        College Projects
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <br />
                         
                    <TabContent>
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects.map((project, index) => {
                                    return(
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )

                                })
                            }
                            </Row>
                            </Tab.Pane> 
                            <Tab.Pane eventKey="second">
                            <Row>
                                {
                                projects.map((Project, index) => {
                                    <p>{projects.title}</p>

                                })
                            }
                            </Row>
                            </Tab.Pane> 
                            <Tab.Pane eventKey="third">
                            <Row>
                                {
                                projects.map((Project, index) => {
                                    <p>{projects.title}</p>

                                })
                            }
                            </Row>
                            </Tab.Pane> 
                        </TabContent>
                    </Tab.Container>
               
                  
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}