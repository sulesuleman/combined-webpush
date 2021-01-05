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
export default class WindowChrome10 extends React.Component{
render(){
    return(
        <div>
{this.props.data.banner!==null?         
        

                               <img src={this.props.data.banner}
                                    width='100%' height='250px' style={{position:'relative'}} />
                                   :
                                      <div></div>
}
{this.props.data.banner!==null?  
         <Card className="card-stats mb-4 mb-xl-0" style={{backgroundColor:'#696969',marginTop:'-100px',position:'relative'
    }}>
<CardBody>
<Row>
  
  <div>
    <Row>

    <div>
 
  </div>
      <Col lg='4' xl='1'>

      <img src={this.props.data.logo}
                                  width='30px' height='30px' style={{ margin: 0,
                                      position: 'absolute',
                                      top: '30%'}}/>
        
      </Col>
      &nbsp;&nbsp;
      <Col lg='12' xl='10'>

        <span style={{fontSize:18,color:'white'}}>{this.props.data.title}</span>      <br />
       
        <span style={{fontWeight:18,fontFamily:'Ariel',color:'white'}}>{this.props.data.message}</span><br />
        <span className="h5 font-weight-bold mb-0">
        Opera.  shop and rewstrauss.com
</span>
        
      </Col>
     <Col xl='7'></Col>
     <Col xl='5'>
      <button
                      className=" btn-icon-clipboard "
                      id="tooltip982655500"
                      type="button"
                      style={{ background: "lightgrey", border: 0, width: "100%",padding: 5, color: 'white', justifyContent: 'center', textAlign: 'center', }}
                    >
                    
                        <span style={{  fontSize: 16,color: "white" ,textAlign:'center'}}>Close&nbsp;&nbsp;</span>
                      
                    </button></Col>
    </Row>
  </div>
</Row>

</CardBody>
</Card>      
:
<Card className="card-stats mb-4 mb-xl-0" style={{backgroundColor:'#696969',position:'relative'
    }}>
<CardBody>
  <Row>
  
    <div>
      <Row>

      <div>
   
    </div>
        <Col lg='4' xl='1'>

        <img src={this.props.data.logo}
                                    width='30px' height='30px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '30%'}}/>
          
        </Col>
        &nbsp;&nbsp;
        <Col lg='12' xl='10'>

          <span style={{fontSize:18,color:'white'}}>{this.props.data.title}</span>      <br />
         
          <span style={{fontWeight:18,fontFamily:'Ariel',color:'white'}}>{this.props.data.message}</span><br />
          <span className="h5 font-weight-bold mb-0">
          Opera.  shop and rewstrauss.com
</span>
          
        </Col>
       <Col xl='7'></Col>
       <Col xl='5'>
        <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "lightgrey", border: 0, width: "100%",padding: 5, color: 'white', justifyContent: 'center', textAlign: 'center', }}
                      >
                      
                          <span style={{  fontSize: 16,color: "white" ,textAlign:'center'}}>Close&nbsp;&nbsp;</span>
                        
                      </button></Col>
      </Row>
    </div>
  </Row>

</CardBody>
</Card>  
    }    </div>
    )
}
}