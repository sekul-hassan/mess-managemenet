import React, {Fragment} from 'react';
import { Container, Row, Table} from "react-bootstrap";

function LastMonthUpdate(props) {
    return (
        <Fragment>
            <Container fluid={true} className="mt-0">
                <Row>
                    <h3>Last month update</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Phone-NO</th>
                            <th>Add-TK</th>
                            <th>Back-TK</th>
                            <th>Total-Meal</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>sekul hassan</td>
                            <td>01824xxxxxx</td>
                            <td>1200</td>
                            <td>120</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>sekul hassan</td>
                            <td>01824xxxxxx</td>
                            <td>1200</td>
                            <td>120</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>sekul hassan</td>
                            <td>01824xxxxxx</td>
                            <td>1200</td>
                            <td>120</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>sekul hassan</td>
                            <td>01824xxxxxx</td>
                            <td>1200</td>
                            <td>120</td>
                            <td>55</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Fragment>
    );
}

export default LastMonthUpdate;