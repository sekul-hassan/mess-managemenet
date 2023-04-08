import React, {Fragment, useEffect, useState} from 'react';
import {Button, Container, Row, Table} from "react-bootstrap";
import axios from "axios";

function BorderList(props) {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = ()=>{
        axios.get("http://localhost:8080/allMember").then((res)=>{
            const data = res.data;
            setUser(data);
            console.log(user);
        });
    }
    return (
        <Fragment>
            <Container fluid={true} className="mt-0">
                <Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone-NO</th>
                            <th>Add-TK</th>
                            <th>Back-TK</th>
                            <th>Total-Meal</th>
                            <th>Take Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            user.map((us,id)=>

                                <tr key={id}>
                                    <td>{id+1}</td>
                                    <td>{us.name}</td>
                                    <td>{us.email}</td>
                                    <td>{us.phone}</td>
                                    <td>{us.addTk}</td>
                                    <td>{us.backTk}</td>
                                    <td>{us.totalMeal}</td>
                                    <td>
                                        <Button className="pmbtn">+</Button>
                                        <Button className="pmbtn">-</Button>
                                        <Button className="modify">Modify</Button>
                                    </td>
                                </tr>

                            )
                        }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Fragment>
    );
}

export default BorderList;