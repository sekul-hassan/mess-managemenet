import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Button, Container, Row, Table} from "react-bootstrap";
import axios from "axios";
import AddExtraContext from "./Context/AddExtra";
import ModifyContext from "./Context/ModifyContext";

function BorderList(props) {
    const [user,setUser] = useState([]);
    const {loadAgain} = useContext(AddExtraContext);
    const {handleModify} = useContext(ModifyContext);
    useEffect(()=>{
        loadUser();
    },[loadAgain]);

    const loadUser = ()=>{
        axios.get("http://localhost:8080/allMember").then((res)=>{
            const data = res.data;
            setUser(data);
        });
    }

    const updateDone = async (id)=>{
        await axios.put(`http://localhost:8080/oneMember/${user[id].id}`,user[id]);
    }
    const mealUpdate = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        const id = e.target.id;
        if(name==="inc"){
            user[id].totalMeal += 1;
        }
        else{
            user[id].totalMeal -= 1;
        }
        if(user[id].totalMeal<=0){
            user[id].totalMeal = 0;
        }
        updateDone(id).then((res)=>{loadUser()});
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
                                        <Button className="pmbtn" name="inc" onClick={mealUpdate} id={id}>+</Button>
                                        <Button className="pmbtn" name="dec" onClick={mealUpdate} id={id}>-</Button>
                                        <Button className="modify" id={us.id} onClick={handleModify}>Modify</Button>
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