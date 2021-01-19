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
                               <span className="h5 font-weight-bold mb-0" style={{color:'#676767',fontFamily: 'Roboto,sans-serif',fontSize:'0.75rem'}}>
                                   Firefox shop and rewstrauss.com 
                           </span>
                              </div>  
                            </Row>
                           <Row>
                           <Col xl='9' lg='9' md='7'>
                                 <span>{this.props.data.title}</span>
                                 <br />
                                 <span style={{fontSize:' .875rem',
    color: '#6a6a6a',
    wordBreak: 'break-word',
    lineHeight: 1.58}}>{this.props.data.message}</span></Col>
                               
                               <Col xl='1' lg='1'></Col>
                                 <Col  xl='1' lg='2' >
                          
                                 <img src={this.props.data.logo}
                                  width='40px' height='40px' />
                           
                            </Col>
                           
                           </Row>
                           
                          </CardBody>
                        </Card>

      </div>
    )
}
}