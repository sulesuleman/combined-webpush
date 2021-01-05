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
export default class WindowChrome extends React.Component{
render(){
    return(
        <div>
         

                         <Card className="card-stats mb-4 mb-xl-0">
                           <CardBody>
                             <Row>
                               <div className="col">
                               <i className="fas fa-bell " />&nbsp;&nbsp;
                                 <span className="h5 font-weight-bold mb-0">
                                  .shop and rewstrauss.com 
                           </span>
                         
                         
                                 
                               </div>
                               <Col className="col-auto">
                                 <div >
                                 <i className="fas fa-cog " /> &nbsp;&nbsp;
                           <i className="fas fa-times " />
                                </div>
                              </Col>
                            
                            </Row>
                            <Row>
                                 <Col xl='9' lg='9' md='7'>
                                 <span>{this.props.data.title}</span>
                                 <br />
                                 <span>{this.props.data.message}</span></Col>
                               
                               <Col xl='1'></Col>
                                 <Col  xl='1' lg='2' >
                          
                                 <img src={this.props.data.logo}
                                  width='40px' height='40px' />
                           
                            </Col>
                               
                            </Row>
                           
                            {this.props.data.banner==null?
                                 <div></div>:<img src={this.props.data.banner}
                                    width='100%' height='150px' />}
                           
                          </CardBody>
                        </Card>

      </div>
    )
}
}