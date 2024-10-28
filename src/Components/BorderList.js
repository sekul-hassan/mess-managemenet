import React, { Fragment, useContext, useEffect, useState, useCallback } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import AddExtraContext from './Context/AddExtra';
import ModifyContext from './Context/ModifyContext';

function BorderList(props) {
    const [user, setUser] = useState([]);
    const { loadAgain } = useContext(AddExtraContext);
    const { handleModify,load,Reload } = useContext(ModifyContext);
    const messId = localStorage.getItem('messId');

    const loadUser = useCallback(() => {
        axios.get(`http://localhost:8080/allMember/${messId}`).then((res) => {
            const data = res.data.data;
            setUser(data);
        });
    }, [messId]);

    useEffect(() => {
        loadUser();
    }, [loadAgain, loadUser,load,Reload]);

    const updateDone = async (id) => {
        const did = user[id].id;
        await axios.put(`http://localhost:8080/oneMember/${messId}/${did}`, user[id]);
    };

    const mealUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const id = e.target.id;
        if (name === 'inc') {
            user[id].totalMeal += 1;
        } else {
            user[id].totalMeal -= 1;
        }
        if (user[id].totalMeal <= 0) {
            user[id].totalMeal = 0;
        }
        updateDone(id).then((res) => {
            loadUser();
        });
    };

    return (
        <Fragment>
            <Container fluid={true} className="mt-0">
                <Row>
                    <h3 className="text-center">All Border List Here</h3>
                    <Table className="boxWidth" striped bordered hover variant="dark">
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
                        {user.map((us,index) => (
                            <tr key={us.id}>
                                <td>{index+1}</td>
                                <td>{us.name}</td>
                                <td>{us.email}</td>
                                <td>{us.phone}</td>
                                <td>{us.addTk}</td>
                                <td>{us.backTk}</td>
                                <td>{us.totalMeal}</td>
                                <td>
                                    <Button className="pmbtn" name="inc" onClick={mealUpdate} id={index}>
                                        +
                                    </Button>
                                    <Button className="pmbtn" name="dec" onClick={mealUpdate} id={index}>
                                        -
                                    </Button>
                                    <Button className="modify" id={us.id} onClick={handleModify}>
                                        Modify
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Fragment>
    );
}

export default BorderList;
