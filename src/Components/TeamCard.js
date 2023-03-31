import React, {Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import img1 from "../Asset/Images/team1.jpg"
import img2 from "../Asset/Images/team2.jpg"
import img3 from "../Asset/Images/team3.jpg"
import img4 from "../Asset/Images/team4.jpg"

function TeamCard(props) {
    return (
        <Fragment>
            <Container fluid={true} className="mt-3 text-center">
                <h2>Our Team Projects</h2>
                <Row>
                   <Col sm={12} md={6} lg={4}>
                       <Card className="cardBody">
                           <Card.Header className="headerImg">
                               <img src={img1} alt="team"/>
                           </Card.Header>
                           <Card.Title>
                               <h2 className="cardHeader">Complete C/C++</h2>
                               <h3 className="cardText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at beatae eos sapiente! Ad beatae commodi, corporis debitis delectus deleniti dicta earum expedita ipsa odio repellendus tempora, tempore voluptatibus.</h3>
                           </Card.Title>
                       </Card>
                   </Col>
                    <Col sm={12} md={6} lg={4}>
                       <Card className="cardBody">
                           <Card.Header className="headerImg">
                               <img src={img2} alt="team"/>
                           </Card.Header>
                           <Card.Title>
                               <h2 className="cardHeader">Complete Java Development</h2>
                               <h3 className="cardText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at beatae eos sapiente! Ad beatae commodi, corporis debitis delectus deleniti dicta earum expedita ipsa odio repellendus tempora, tempore voluptatibus.</h3>
                           </Card.Title>
                       </Card>
                   </Col>
                    <Col sm={12} md={6} lg={4}>
                       <Card className="cardBody">
                           <Card.Header className="headerImg">
                               <img src={img3} alt="team"/>
                           </Card.Header>
                           <Card.Title>
                               <h2 className="cardHeader">Complete Frontend Design</h2>
                               <h3 className="cardText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at beatae eos sapiente! Ad beatae commodi, corporis debitis delectus deleniti dicta earum expedita ipsa odio repellendus tempora, tempore voluptatibus.</h3>
                           </Card.Title>
                       </Card>
                   </Col>
                    <Col sm={12} md={6} lg={4}>
                       <Card className="cardBody">
                           <Card.Header className="headerImg">
                               <img src={img1} alt="team"/>
                           </Card.Header>
                           <Card.Title>
                               <h2 className="cardHeader">Complete React Development</h2>
                               <h3 className="cardText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at beatae eos sapiente! Ad beatae commodi, corporis debitis delectus deleniti dicta earum expedita ipsa odio repellendus tempora, tempore voluptatibus.</h3>
                           </Card.Title>
                       </Card>
                   </Col>
                    <Col sm={12} md={6} lg={4}>
                       <Card className="cardBody">
                           <Card.Header className="headerImg">
                               <img src={img4} alt="team"/>
                           </Card.Header>
                           <Card.Title>
                               <h2 className="cardHeader">Complete Python Development</h2>
                               <h3 className="cardText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at beatae eos sapiente! Ad beatae commodi, corporis debitis delectus deleniti dicta earum expedita ipsa odio repellendus tempora, tempore voluptatibus.</h3>
                           </Card.Title>
                       </Card>
                   </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default TeamCard;