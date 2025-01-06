import { Col, Container, Row, TabContent, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../images/color-sharp2.png";
import projImg1 from "../images/project-img1.png";
import projImg2 from "../images/project-img2.png";
import projImg3 from "../images/project-img3.png";
import projImg4 from "../images/project-img4.png";
import projImg5 from "../images/project-img5.png";

import Nav from 'react-bootstrap/Nav';

export const Projects = () => {
    const frontendProjects = [
        {
            title: "Ecommerce website using javascript",
            description: "An eCommerce project built using JavaScript, HTML, and CSS features a sign-up, login, and main page. User information is stored in a local database, with interactive elements like event listeners enhancing functionality and user experience.",
            imgUrl: projImg1,
            linkUrl: "https://rajeshwarimahadik.github.io/Ecommerce-Website-Using-JavaScript/", 
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
    ];

    const backendProjects = [
        {
            title: "Tours and Travels Management System",
            description: "A backend management system for handling tours and travel bookings. Built using Java, it includes features like adding, deleting, and viewing travel packages and customer details.",
            imgUrl: projImg4, 
            linkUrl: "https://github.com/rajeshwarimahadik/Tours-Travels_Management_System",
        }
    ];

    const collegeProjects = [
        {
            title: "Design and Development of RC Ornithopter",
            description: "The project involves designing and developing an ornithopter controlled by a remote, aiming to improve the efficiency of flapping-wing UAVs compared to fixed-wing UAVs. It explores the feasibility of using the ornithopter for law enforcement, jungle warfare, and civilian applications like topographical mapping and wildlife protection.",
            imgUrl: projImg5, 
            linkUrl: "https://drive.google.com/file/d/1OC93G-m-fXY5q-zKlbWsvhjidlZL-Muh/view?usp=sharing",
            isGoogleDriveLink: true, 
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Welcome to my project section, where I showcase a variety of work demonstrating my skills in JavaScript, React, HTML, and CSS. I have developed responsive user interfaces, integrated APIs, and built robust backend systems using Java. Each project reflects my dedication to creating seamless and efficient digital experiences.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Frontend Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Backend Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">College Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <br />

                            <TabContent>
                                {/* Frontend Projects Tab */}
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {frontendProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>

                                {/* Backend Projects Tab */}
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {backendProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>

                                {/* College Projects Tab */}
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {collegeProjects.map((project, index) => (
                                            <Col key={index} md={4}>
                                                <div className="project-card">
                                                    <img src={project.imgUrl} alt={project.title} />
                                                    <h3>{project.title}</h3>
                                                    <p>{project.description}</p>
                                                    
                                                    {/* Check if it's a Google Drive link */}
                                                    {project.isGoogleDriveLink ? (
                                                        <iframe
                                                            src={project.linkUrl.replace("view?usp=sharing", "preview")}
                                                            width="100%"
                                                            height="400px"
                                                            frameBorder="0"
                                                            allow="autoplay; encrypted-media"
                                                            title="Google Drive Preview"
                                                        ></iframe>
                                                    ) : (
                                                        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                                                    )}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </TabContent>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
};



