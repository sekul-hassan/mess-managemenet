import React, {Fragment, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Row, Table} from "react-bootstrap";
import ModifyContext from "./Context/ModifyContext";
import {toast} from "react-toastify";
import ModifyExtraBill from "./ModifyExtraBill";

function ExtraBill(props) {

    const [modifyExtraBill, setModifyExtraBill] = useState(false);
    const[extraBill, setExtraBill] = React.useState([]);
    const [billData, setBillData] = React.useState({});
    const messId = localStorage.getItem('messId');
    const{reloadExtraBill,setReloadExtraBill} = useContext(ModifyContext);

    useEffect(() => {
        axios.get(`http://localhost:8080/extraBillIs/${messId}`).then((response) => {
            setExtraBill(response.data.data);
            console.log(response.data.data);
        })
    }, [messId,reloadExtraBill]);

    const deleteExtraBill = (id) => {
        axios.delete(`http://localhost:8080/deleteExtraBill/${id}`).then((response) => {
            toast.success(response.data.message);
            setReloadExtraBill(!reloadExtraBill);
        }).catch((error) => {
            console.log(error);
            toast.error("You don't have permission to delete");
        })
    }

    const showExtraBillModify = (data) =>{
        setBillData(data);
        setModifyExtraBill(!modifyExtraBill);
    }

    return (
      <Fragment>
          <Container>
              <Row>
                  <h3 className="text-center">Here All Extra Bills</h3>
                  <Table className="boxWidth" striped bordered hover variant="dark">
                      <thead>
                      <tr>
                          <th>SI</th>
                          <th>Wifi bills</th>
                          <th>Khala bills</th>
                          <th>Others</th>
                          <th>Take Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      {extraBill.map((us,index) => (
                          <tr key={us.id}>
                              <td>{index+1}</td>
                              <td>{us.wifiBill}</td>
                              <td>{us.khalaBill}</td>
                              <td>{us.others}</td>
                              <td>
                                  <Button variant="outline-light" className="mx-2" onClick={()=>showExtraBillModify(us)}>Modify</Button>
                                  <Button variant="outline-danger" onClick={()=>deleteExtraBill(us.id)}>Delete</Button>
                              </td>
                          </tr>
                      ))}
                      </tbody>
                  </Table>
              </Row>
          </Container>
          <ModifyExtraBill modifyExtraBill={modifyExtraBill} setModifyExtraBill={setModifyExtraBill} billData={billData}/>
      </Fragment>
    );
}

export default ExtraBill;



