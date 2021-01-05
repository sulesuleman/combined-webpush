
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
export default class MacSafari extends React.Component{
render(){
    return(
        <div>
         

         <Card className="card-stats mb-4 mb-xl-0" style={{borderRadius:10,backgroundColor:'lightgrey',padding:1}}>
<CardBody>
  <Row>
    <div className="col">
      <Row>
        <Col lg='1' xl='1'>

        <img src={require("assets/img/theme/safari.jpg")}
                                    width='30px' height='30px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '30%'}}/>
          
        </Col>
        &nbsp;&nbsp;
        <Col lg='10' xl='10'>

          <span style={{fontSize:18}}>{this.props.data.title}</span>      <br />
          <span className="h5 font-weight-bold mb-0">
            shop and rewstrauss.com 14.27
</span>
          <br />
          <span style={{fontWeight:10,fontFamily:'Ariel'}}>{this.props.data.message}</span>

        </Col>
      </Row>
    </div>
  </Row>

</CardBody>
</Card>      </div>
    )
}
}