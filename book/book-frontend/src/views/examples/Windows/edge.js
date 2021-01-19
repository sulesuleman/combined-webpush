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
import { Button } from 'antd';
export default class Edge extends React.Component{
render(){
  console.log('egde',this.props.count)
    return(
        <div>
         

         <Card className="card-stats mb-4 mb-xl-0" style={{borderRadius:10,backgroundColor:'#696969',padding:1}}>
<CardBody>
  <Row>
    <div className="col">
      <Row>
        <Col lg='4' xl='1'>

        <img src={this.props.data.logo}
                                    width='30px' height='30px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '20%'}}/>
          
        </Col>
        &nbsp;&nbsp;
        <Col lg='12' xl='10'>

          <span style={{fontSize:18,color:'white'}}>{this.props.data.title}</span>      <br />
         
          
<span style={{fontWeight:18,fontFamily:'Ariel',color:'lightgrey'}}>{this.props.data.message}</span><br />
          <span className="h5 font-weight-bold mb-0" style={{color:'lightgrey',fontFamily: 'Roboto,sans-serif',fontWeight:'700',fontSize:'0.625rem'}}>
          shop and rewstrauss.com .via Microsift Edge
</span>
                           
          
        </Col>
       
      </Row>
      {this.props.data.count===0
        ?
      <div></div>:
      
      this.props.data.count===1?
      <Col xl='6' >
        
        {
        this.props.data.button1===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 1 
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button1}
                 </Button>
        }</Col>
                  :
                  this.props.data.count===2?
                  <Row>
                  <Col xl='6' >
                  {
        this.props.data.button1===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 1 
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button1}
                 </Button>
        }</Col>
                  <Col xl='6'> {
        this.props.data.button2===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 2
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button2}
                 </Button>
        }</Col>
                </Row>
                :
                <div></div>
    }
        
                 
      
      <Row>
        <Col xl='2'></Col>
        <Col xl='10'>
      {this.props.data.banner==null?
                                 <div></div>:<img src={this.props.data.banner}
                                    width='80%' height='150px' />}
                               </Col>     </Row>
    </div>
  </Row>

</CardBody>
</Card>      </div>
    )
}
}