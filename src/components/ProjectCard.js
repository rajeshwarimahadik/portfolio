import {Col} from "react-bootstrap";
export const ProjectCard = ({title , description , imgUrl , linkUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} style={{ width: '355px', height: '301px',  }}/>
                <div className="proj-txtx">
                   <h4>{title}</h4>
                   <span>{description}</span><br /><br />
                   <a href={linkUrl}><h5>Preview</h5></a>
                </div>
            </div>
        </Col>
    )
}