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
export default class AndroidChrome extends React.Component{
render(){
    return(
        <div>
         

                         <Card className="card-stats mb-4 mb-xl-0">
                           <CardBody>
                             <Row>
                               <div className="col">
                               <i className="fas fa-bell " />&nbsp;&nbsp;
                               
                                 <span className="h5 font-weight-bold mb-0" style={{color:'#676767',fontFamily: 'Roboto,sans-serif',fontSize:'0.75rem'}}>
                                 Chrome shop and rewstrauss.com 
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
    lineHeight: 1.58}}>{this.props.data.message}</span><br />
          </Col>
                               
                               <Col xl='1' lg='1'></Col>
                                 <Col  xl='1' lg='2' >
                          
                                 <img src={this.props.data.logo}
                                  width='40px' height='40px' />
                           
                            </Col>
                            </Row>
                            {this.props.data.banner==null?
                                 <div></div>:<img src={this.props.data.banner}
                                    width='200px' height='150px' />}
                            <p className="mt-3 mb-0 text-muted text-sm">
                            {this.props.data.count===0
        ?
 
        <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                              Site Setting
                        </span>             
 :
 this.props.data.count===1?
 <div>
     {
       this.props.data.button1===''?
       <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                             Button 1&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>    
    :
    <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                           {this.props.data.button1}&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>    
       }
        <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                             &nbsp;&nbsp; Site Setting
                        </span> 
     </div>
     
                 :
                 this.props.data.count===2?
              <div>
                {
       this.props.data.button1===''?
       <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                             Button 1&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>    
    :
    <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                           {this.props.data.button1}&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>    
      
       }
              {
       this.props.data.button2===''?
       <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                           &nbsp;&nbsp;  Button 2&nbsp;&nbsp;&nbsp;&nbsp; 
                        </span>    
    :
    <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                  &nbsp;&nbsp;          {this.props.data.button2}&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>    
      
       }
        <span className=" mr-2" style={{    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: '.75rem',
    color:' #848484',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 'bolder'}}>
                          &nbsp;&nbsp;    Site Setting
                        </span> 
                        </div>
               :
               <div></div>
   }                         {" "}

                            </p>
                          </CardBody>
                        </Card>

      </div>
    )
}
}