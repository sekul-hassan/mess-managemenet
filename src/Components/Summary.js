import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Container, Row, Table} from "react-bootstrap";
import axios from "axios";
import ModifyContext from "./Context/ModifyContext";
import {toast} from "react-toastify";


function Summary(props) {

    const messId = localStorage.getItem('messId');
    const [data, setData] = useState([]);
    const { load,Reload } = useContext(ModifyContext);

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        console.log(messId);
        axios.get(`http://localhost:8080/calculation/${messId}/${year}/${month}`).then((res) => {
            const getData = res.data.summary;
            console.log(getData);
            setData(getData);
            toast.success(res.data.message);
            Reload(!load);
        }).catch((err) => {
            console.log(err);
            toast.error("Could not load data");
        })
    });


    return (
        <Fragment>
            <Container fluid={true} className="mt-0">
                <Row>
                    <h3>Generate your calculation</h3>
                    <Table className="boxWidth" striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>SI</th>
                            <th>Total-TK</th>
                            <th>Total-Cost</th>
                            <th>Total-Meal</th>
                            <th>Meal-Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{data.addTk}</td>
                            <td>{data.totalCost}</td>
                            <td>{data.totalMeal}</td>
                            <td>{data.mealRate}</td>
                        </tr>
                        </tbody>

                    </Table>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Summary;