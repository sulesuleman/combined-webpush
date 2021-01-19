
import React from "react";
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import {  DownOutlined, UserOutlined } from '@ant-design/icons';

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
import ReactDOM from 'react-dom'
const menu = (
    <Menu >
      <Menu.Item key="1" icon={<UserOutlined />}>
        Disable Notification from Shop and remin.com
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
     Notification Setting
      </Menu.Item>
     
    </Menu>
  );
export default class MacFirefox extends React.Component{

    RadioChanged() {
        const radio = (
          <div>
 <img src={require("assets/img/theme/bell.png")}
                                    width='40px' height='40px' style={{ marginLeft: 40,
                                        position: 'absolute',
                                        top: '20%'}}/>
          </div>
        )
        ReactDOM.render(radio, document.getElementById('radio'));
      }
     Enter() {
        const enter = (
            <div > 
               
         <div className='hov'>Close</div>
         <div className='hov2'>
         <Dropdown overlay={menu} backgroundColor='lightgrey'>
      <Button>
        ... <DownOutlined />
      </Button>
    </Dropdown></div>
    </div>
        )
        ReactDOM.render(enter, document.getElementById('radio'));
      }
render(){
    return(
        <div>
         

         <Card className="" style={{borderRadius:10,backgroundColor:'lightgrey',padding:1}} onMouseEnter={this.Enter} onMouseLeave={this.RadioChanged}>
<CardBody>
  <Row>
    <div className="col">
    <Row>
        <Col lg='1' xl='1'>

        <img src={require("assets/img/theme/firefox.jfif")}
                                    width='30px' height='30px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '30%'}}/>
          
        </Col>   &nbsp;   &nbsp;
        <Col lg='7' xl='7'>

        <span style={{color:'#39393a',
    fontSize: '.9375rem',    fontFamily: 'Roboto,sans-serif'}}>{this.props.data.title}</span>      <br />
          <span className="h5 font-weight-bold mb-0" style={{    color: '#676767',
    fontSize: '.75rem',
    fontWeight: '700',
    lineHeight: 1.75,
    fontFamily: 'Roboto,sans-serif'}}>
            shop and rewstrauss.com 
</span>
          <br />
          <span style={{    color: '#676767',
    fontSize: '.84375rem',    fontFamily: 'Roboto,sans-serif'}}>{this.props.data.message}</span>
        </Col>
        <Col lg='3' xl='3' >

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