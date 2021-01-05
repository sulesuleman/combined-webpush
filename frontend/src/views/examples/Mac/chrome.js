

import React from "react";
import '../../examples/campaigns.css';
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
import ReactDOM from 'react-dom'
export default class MacChrome extends React.Component{
    RadioChanged() {
        const radio = (
          <div>
    <img src={require("assets/img/theme/bell.png")}
                                    width='30px' height='30px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '30%'}}/>
          </div>
        )
        ReactDOM.render(radio, document.getElementById('radio'));
      }
     Enter() {
        const enter = (
            <div > 
               
         <div className='hov'>Close</div>

         <div className='hov1'>Setting</div></div>
        )
        ReactDOM.render(enter, document.getElementById('radio'));
      }

    render(){
    return(
        <div>
         

         <Card className="" style={{borderRadius:10,backgroundColor:'lightgrey',padding:1}} onMouseEnter={this.Enter} onMouseLeave={()=>this.RadioChanged}>
<CardBody>
  <Row>
    <div className="col">
    <Row>
        <Col lg='1' xl='1' md='4'>

        <img src={require("assets/img/theme/chrome.png")}
                                    width='30px' height='30px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '30%'}}/>
          
        </Col>   &nbsp;   &nbsp;
        <Col lg='7' xl='7' md='14'>

          <span style={{fontSize:18}}>{this.props.data.title}</span>      <br />
          <span className="h5 font-weight-bold mb-0">
            shop and rewstrauss.com 
</span>
          <br />
          <span style={{fontWeight:10,fontFamily:'Ariel'}}>{this.props.data.message}</span>

        </Col>
        <Col lg='3' xl='3' md='8' >

        <div id='radio'></div>
          
        </Col>
      </Row>
    </div>
  </Row>

</CardBody>
</Card>      </div>
    )
}
}