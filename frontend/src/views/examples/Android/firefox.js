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
export default class AndroidFirefox extends React.Component{
render(){
    return(
        <div>
         

         <Card className="card-stats mb-4 mb-xl-0">
                           <CardBody>
                             <Row>
                               <div className="col">
                               <img src={require("assets/img/theme/firefox.jfif")}
                                    width='30px' height='30px' />&nbsp;&nbsp;
                                 <span className="h5 font-weight-bold mb-0">
                                   Firefox shop and rewstrauss.com 
                           </span>
                              </div>  
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
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />Site Setting
                        </span>{" "}

                            </p>
                          </CardBody>
                        </Card>

      </div>
    )
}
}