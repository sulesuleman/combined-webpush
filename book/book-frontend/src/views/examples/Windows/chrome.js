import React from "react";
import '../campaigns.css';
import { Bell } from 'tabler-icons-react';
// reactstrap components
import {

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
import {Button } from 'antd'
export default class WindowChrome extends React.Component{
render(){
    return(
        <div>
         

                         <Card className="card-stats mb-4 mb-xl-0">
                           <CardBody>
                             <Row>
                               <div className="col">
                               <i className="fas fa-bell " />&nbsp;&nbsp;
                                 <span className="h5 font-weight-bold mb-0" style={{    color: '#515050',
    fontSize: '.6875rem',
    letterSpacing: '.5px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'}}>
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
                                 <span style={{color: '#343434',
    width:' 100%',
    fontSize: '.8125rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'}}>{this.props.data.title}</span>
                                 <br />
                                 <span style={{color: '#9f9f9f',
    fontSize: '.8125rem',
    width: '100%',
    wordBreak: 'break-word'}}>{this.props.data.message}</span></Col>
                               
                               <Col xl='1'></Col>
                                 <Col  xl='1' lg='2' >
                          
                                 <img src={this.props.data.logo}
                                  width='40px' height='40px' />
                           
                            </Col>
                               
                            </Row>
                           
                            {this.props.data.banner==null?
                                 <div></div>:<img src={this.props.data.banner}
                                    width='100%' height='150px' />}
                                    <div style={{backgroundColor:'lightgrey'}}>
                              {this.props.data.count===0
        ?
 
        <div></div>               
 :
      
      this.props.data.count===1?
  <div>
      {
        this.props.data.button1===''?
        <Button  style={{backgroundColor:'lightgrey',color:'blue'}}>
       Button 1
        </Button>
     :
     <Button  style={{backgroundColor:'lightgrey',color:'blue'}}>
     {this.props.data.button1}
     </Button>
        }
      </div>
      
                  :
                  this.props.data.count===2?
               <div>
                 {
        this.props.data.button1===''?
        <Button  style={{backgroundColor:'lightgrey',color:'blue'}}>
       Button 1
        </Button>
     :
     <Button  style={{backgroundColor:'lightgrey',color:'blue'}}>
     {this.props.data.button1}
     </Button>
        }
               {
        this.props.data.button2===''?
        <Button  style={{backgroundColor:'lightgrey',color:'blue'}}>
       Button 2
        </Button>
     :
     <Button  style={{backgroundColor:'lightgrey',color:'blue'}}>
     {this.props.data.button2}
     </Button>
        }</div>
                :
                <div></div>
    }
    </div>
                          </CardBody>
                        </Card>

      </div>
    )
}
}