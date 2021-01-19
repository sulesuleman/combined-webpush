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
import {Button } from 'antd';
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

      <span style={{    color: '#fff',
    fontSize: '16px',
    maxHeight: '2.3rem',
    lineHeight: 1.225,
    overflow: 'hidden',
    fontFamily: 'Roboto,sans-serif',fontWeight:'700',fontSize:'0.625rem'}}>{this.props.data.title}</span>      <br />
         
        <span style={{    color: '#aaa',
    fontSize: '16px',
    maxHeight: '4.6rem',
    lineHeight: 1.225,
    overflow: 'hidden',
    fontFamily: 'Roboto,sans-serif',fontWeight:'700',fontSize:'0.625rem'}}>{this.props.data.message}</span><br />
        <span className="h5 font-weight-bold mb-0" style={{color:'lightgrey',fontFamily: 'Roboto,sans-serif',fontWeight:'700',fontSize:'0.625rem'}}>
          Opera.  shop and rewstrauss.com
</span>
        
      </Col>
      <Col></Col>
      </Row>
    </div>
  </Row>
  {this.props.data.count===0
        ?
 
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',float:'right',width:'50%'}} >
                  Close
                  </Button>                  
 :
      
      this.props.data.count===1?
   
      <Row>
      <Col xl='6'>
        </Col>
        <Col xl='6'>
      {
        this.props.data.button1===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 1 
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button1}
                 </Button>
        }
        </Col>
        </Row>
                  :
                  this.props.data.count===2?
               <div>
                 <Row>
                   <Col xl='6'>
                   {
                   this.props.data.button1===''?
                   <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
                 
                   Button 1 
                              </Button>
                :
                   <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
                 
                 {this.props.data.button1}
                            </Button>
                   } </Col>
                   <Col xl='6'>
                   {
        this.props.data.button2===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 2
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button2}
                 </Button>
        }
                   </Col>
                 </Row>
                  
                </div>
                :
                <div></div>
    }
     

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

          <span style={{    color: '#fff',
    fontSize: '16px',
    maxHeight: '2.3rem',
    lineHeight: '1.225',
    overflow: 'hidden',
    fontFamily: 'Roboto,sans-serif'}}>{this.props.data.title}</span>      <br />
         
        <span style={{    color: '#aaa',
    fontSize: '16px',
    maxHeight: '4.6rem',
    lineHeight: '1.225',
    overflow: 'hidden',
    fontFamily: 'Roboto,sans-serif'}}>{this.props.data.message}</span><br />
          <span className="h5 font-weight-bold mb-0" style={{color:'lightgrey',fontFamily: 'Roboto,sans-serif',fontWeight:'700',fontSize:'0.625rem'}}>
          Opera.  shop and rewstrauss.com
</span>
          
        </Col>
      <Col></Col>
      </Row>
    </div>
  </Row>
  {this.props.data.count===0
        ?
 
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',float:'right',width:'50%'}} >
                  Close
                  </Button>                  
 :
      
      this.props.data.count===1?
      <Row>
      <Col xl='6'>
        </Col>
        <Col xl='6'>
      {
        this.props.data.button1===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 1 
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button1}
                 </Button>
        }
        </Col>
        </Row>
                  :
                  this.props.data.count===2?
               <div>
                 <Row>
                   <Col xl='6'>
                   {
        this.props.data.button1===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 1 
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button1}
                 </Button>
        }
                   </Col>
                   <Col xl='6'>
                   {
        this.props.data.button2===''?
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
        Button 2
                   </Button>
     :
        <Button style={{backgroundColor:'grey',color:'white',border:'1px solid grey',width:'100%'}} >
      
      {this.props.data.button2}
                 </Button>
        }
                   </Col>
                 </Row>
                  
                </div>
                :
                <div></div>
    }
        
      
</CardBody>
</Card>  
    }    </div>
    )
}
}