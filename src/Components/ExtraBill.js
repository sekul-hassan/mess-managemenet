import React, {Fragment, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Row, Table} from "react-bootstrap";
import {toast} from "react-toastify";
import ModifyExtraBill from "./ModifyExtraBill";
import BazarContext from "./Context/BazarContext";

function ExtraBill(props) {

    const [modifyExtraBill, setModifyExtraBill] = useState(false);
    const[extraBill, setExtraBill] = React.useState([]);
    const [billData, setBillData] = React.useState({});
    const messId = localStorage.getItem('messId');
    const{reloadExtraBill,setReloadExtraBill,openExtra} = useContext(BazarContext);

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;


    useEffect(() => {
        axios.get(`http://localhost:8080/extraBillIs/${messId}/${year}/${month}`).then((response) => {
            setExtraBill(response.data.data);
            console.log(response.data.data);
        })
    }, [messId,reloadExtraBill,year,month]);

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
          <Container fluid="true">
             <div className="text-center mt-3">
                 <Button className="btnHover" onClick={openExtra}>ADD EXTRA BILL</Button>
             </div>
              <Row className="mx-0">
                  <h3 className="text-center mt-2">Here All Extra Bills</h3>
                  <Table className="boxWidth" striped bordered hover variant="dark">
                      <thead>
                      <tr>
                          <th>SI</th>
                          <th>Wifi bills</th>
                          <th>Khala bills</th>
                          <th>Fixed Meal</th>
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
                              <td>{us.fixedMeal}</td>
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



