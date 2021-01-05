import React from "react";
import '../campaigns.css';
import { Bell } from 'tabler-icons-react';
// reactstrap components
import {
    Button,
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
export default class Firefox extends React.Component {
    render() {
        return (
            <div>


                <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                        <Row>
                            <div className="col">

                                <span className="h5 font-weight-bold mb-0">
                                  {this.props.data.title}    </span>
                                <br />
                                <Row>
                                    <Col lg='4' xl='2'>

                                        <img src={this.props.data.logo}   
                                            width='60px' height='60px' style={{
                                                margin: 0,
                                                position: 'absolute',
                                                top: '10%'
                                            }} />

                                    </Col>

                                   <Col lg='10' xl='10'>



                                        <span>&nbsp;&nbsp; {this.props.data.message}   </span>
                                    </Col>
                                </Row>
                            </div>
                            <Col className="col-auto">
                                <div >

                                    <i className="fas fa-times " />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl='2'></Col>
                            <Col xl='10'><p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-success mr-2">
                                &nbsp;   Via shop and rem.com
                        </span>
                        <i className="fas fa-cog " style={{float:'right'}}/>
                            </p></Col>
                  
                        </Row>

                    </CardBody>
                </Card>

            </div>
        )
    }
}