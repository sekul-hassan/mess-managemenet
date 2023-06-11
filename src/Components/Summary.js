import React, {Fragment, useContext, useState} from 'react';
import {Button, Container, Row, Table} from "react-bootstrap";
import axios from "axios";
import ModifyContext from "./Context/ModifyContext";


function Summary(props) {

    const messId = localStorage.getItem('messId');
    const [data, setData] = useState([]);
    const { load,Reload } = useContext(ModifyContext);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(messId);
        axios.get(`http://localhost:8080/calculation/${messId}`).then((res) => {
            const getData = res.data;
            setData(getData);
            Reload(!load);
        });
    };



    return (
        <Fragment>
            <Container fluid={true} className="mt-0">
                <Row>
                    <h3>Generate your calculation</h3> <Button onClick={handleClick}>Click</Button>
                    <Table className="boxWidth" striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>SI</th>
                            <th>Total-TK</th>
                            <th>Total-Cost</th>
                            <th>Total-Meal</th>
                            <th>Khala</th>
                            <th>Wifi</th>
                            <th>Fixed</th>
                            <th>Meal-Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{data.addTk}</td>
                            <td>{data.totalCost}</td>
                            <td>{data.totalMeal}</td>
                            <td>{data.khala}</td>
                            <td>{data.wifi}</td>
                            <td>{data.fixed}</td>
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