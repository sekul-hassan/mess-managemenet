import React, {Fragment, useContext} from 'react';
import {Button, Container, Row, Table} from "react-bootstrap";
import BazarContext from "./Context/BazarContext";
import axios from "axios";
import {toast} from "react-toastify";

function BazarList(props) {

    const {handleSet,bills,load,setLoad} = useContext(BazarContext);
    const deleteCost = (e)=>{
        e.preventDefault();
        const idx = bills[e.target.id].id;
        axios.delete(`http://localhost:8080/deleteCost/${idx}`).then((res)=>{
            setLoad(!load);
            toast.success(res.data.message);
        }).catch(err=>{
            toast.error("You don't have permission to delete");
        })
    }

    return (
        <Fragment>
            <Container fluid={true} className="mt-0">
                <Row>
                    <Table className="boxWidth" striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>SI</th>
                            <th>Date</th>
                            <th>Cost</th>
                            <th>Take Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            bills.map((data,index)=>(
                                <tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.billDate}</td>
                                    <td>{data.bill}</td>
                                    <td>
                                        <Button className="bazarModify" id={index} onClick={handleSet}>Modify</Button>
                                        <Button className="bazarDelete" id={index} onClick={deleteCost}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Row>
            </Container>

        </Fragment>
    );
}

export default BazarList;
