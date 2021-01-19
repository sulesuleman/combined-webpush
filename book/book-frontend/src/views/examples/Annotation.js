/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create google maps

// reactstrap components
import { Container, Row } from "reactstrap";
import {

  CardHeader,
  CardBody,
  UncontrolledTooltip,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import { Edit } from 'tabler-icons-react';
// core components
import { User, Plus } from 'tabler-icons-react';
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Link } from "react-router-dom";
import { List, Button, Switch, Card, Space } from 'antd';
import { Tabs } from 'antd';
import Android from './Android/AndroidPage'
import Mac from './Mac/macpage'
import Window from './Windows/windowpage'
import { Select } from 'antd';
import axiosInstance from '../../Apis/axiosapi'
const { Option } = Select;
const { TabPane } = Tabs;
const { Meta } = Card;
var automation;
const data = [
  {
    title: 'Welcome Notification',
    id: '1',
    description: ' A Notification is sent to the subscriber as soon as they subscribe to your store notification'
  },
  {
    title: 'Back In Stock',
    id: '1',
    description: ' Black Friday 30% OFF on all Products'
  },

  {
    title: 'Recover Abandoned Carts',
    id: '1',
    description: ' Claim revenue from shoppers who left their items in cart'
  },


];

class Annotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Android',
      title: 'Welcome Notification',
      description: ' A Notification is sent to the subscriber as soon as they subscribe to your store notification'
,
      welcome:[],
      back:[],
      price:[],
      cart:[],
      shipping:[]
    }
  }
  async componentDidMount(){
await axiosInstance.WelcomeNotification().then(res => {
  if(res.status === 200){

      console.log("Welcome :",res.data);
      this.setState({welcome:res.data})
  }
  else  {
   
      console.log('Incorrect Values, try again!');
  }
});
await axiosInstance.BackInStock().then(res => {
  if(res.status === 200){

      console.log("BackinStock :",res.data);
      this.setState({back:res.data})
  }
  else  {
   
      console.log('Incorrect Values, try again!');
  }
});
await axiosInstance.shipping().then(res => {
  if(res.status === 200){

      console.log("shipping :",res.data);
      this.setState({shipping:res.data})
  }
  else  {
   
      console.log('Incorrect Values, try again!');
  }
});
await axiosInstance.AbandonedCart().then(res => {
  if(res.status === 200){

      console.log("cart :",res.data);
      this.setState({cart:res.data})
  }
  else  {
   
      console.log('Incorrect Values, try again!');
  }
});
await axiosInstance.PriceDrop().then(res => {
  if(res.status === 200){

      console.log("Price :",res.data);
      this.setState({price:res.data})
  }
  else  {
   
      console.log('Incorrect Values, try again!');
  }
});
  }
  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ category: event.target.value });

  }
  submit = (item, description) => {
    console.log("title", item)
    this.setState({ title: item });
    this.setState({ description: description });
  }
  handleReminder(value) {
    console.log(`selected ${value}`);
  }
  render() {
    automation = {
      title: this.state.title,
      message: this.state.description,
      banner: null,
      count: 0,
      logo: "https://previews.123rf.com/images/alekseyvanin/alekseyvanin1705/alekseyvanin170501038/77839919-ringing-bell-icon-vector-alarm-solid-logo-illustration-colorful-pictogram-isolated-on-white.jpg"

    }
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {
        color: "#fff",
        backgroundColor: " #3b5999",
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 5,
        border: "1px solid black",
        padding: 3, width: '100%'
      }
    } else {
      linkStyle = {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 5,
        border: "1px solid black",
        padding: 3, width: '100%'
      }
    }



    return (

      <>
        <CompaignsHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">

              <br />
              <Row>


                <Col xl='5'>
                  <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <Card className="card-stats mb-4 mb-xl-0 card" onClick={() => this.submit(item.title, item.description)}>
                          <Row>
                            <Col xl='10'>
                              <Meta


                                title={item.title}

                              />
                            </Col>
                            <Col xl='2'>
                              <Switch defaultChecked onChange={this.onChange} /></Col></Row>
                          <br />
                          <p> {item.description}</p>

                          <Row>
                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '12px',}}>In Queue</span>
                            </Col>
                            <Col lg='6' xl='3'>

                              <span style={{ fontSize: '12px'}}>Impression </span>
                            </Col>

                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '12px'}}> Revenue </span>
                            </Col>

                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '12px',}}>Clicks</span>
                            </Col>
                          </Row>
                          <Row>

                            <Col lg='6' xl='3'>

                              <span style={{ fontSize: '17px',}}>525 </span>
                            </Col>



                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '17px', }}>78</span>
                            </Col>
                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '17px', }}> $7858 </span>
                            </Col>
                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '17px', }}>78</span>
                            </Col> </Row>
                        </Card>

                      </List.Item>
                    )}
                  />

                </Col>



                <Col xl='7'>

                  {this.state.title === 'Back In Stock' ?
                    <Card className=" shadow">
                      <Row>
                        <Col xl='10'> <h2 className=" bg-transparent">
                          Back In Stock
              </h2></Col>
                        <Col xl='1'>
                          <Switch defaultChecked onChange={this.onChange} /></Col></Row>

                      <CardBody>
                        <Row>
                          <Col lg='6' xl='3'>
                            <span style={{ fontSize: '16px' }}>In Queue</span>
                          </Col>
                          <Col lg='6' xl='3'>

                            <span style={{ fontSize: '16px'}}>Impression </span>
                          </Col>

                          <Col lg='6' xl='3'>
                            <span style={{ fontSize: '16px' }}> Revenue </span>
                          </Col>

                          <Col lg='6' xl='3'>
                            <span style={{ fontSize: '16px' }}>Clicks</span>
                          </Col>
                        </Row>
                        <Row>

                          <Col lg='6' xl='3'>

                            <span style={{ fontSize: '22px', }}>525 </span>
                          </Col>



                          <Col lg='6' xl='3'>
                            <span style={{ fontSize: '22px', }}>78</span>
                          </Col>
                          <Col lg='6' xl='3'>
                            <span style={{ fontSize: '22px', }}> $7858 </span>
                          </Col>
                          <Col lg='6' xl='3'>
                            <span style={{ fontSize: '22px', }}>78</span>
                          </Col> </Row>


                      </CardBody>
                    </Card>
                    :

                    this.state.title === 'Recover Abandoned Carts' ?

                      <Card className=" shadow">
                        <Row>
                          <Col xl='6'> <h2 className=" bg-transparent">
                            Recover Abandoned Carts
                </h2></Col>
                          <Col xl='4'>
                            <UncontrolledDropdown nav>
                              <DropdownToggle className="pr-0" nav>
                                <Media className="" >
                                  <Media className="ml-2 d-none d-lg-block dropfilter" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>

                                    &nbsp;  <i className="ni ni-calendar-grid-58" />
                                    <span className="mb-0 text-sm font-weight-bold" style={{ fontSize: 12 }}>
                                      &nbsp; Time Filter&nbsp;&nbsp;
                      </span>
                                  </Media>
                                </Media>
                              </DropdownToggle>

                              <DropdownMenu className="dropdown-menu-arrow" right>

                                <DropdownItem to="/admin/user-profile" tag={Link}>

                                  <span>Last 7 days</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>

                                  <span>Last 30 days</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>

                                  <span>Last 90 days</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>

                                  <span>All Time</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>

                                  <span>Custom Date</span>
                                </DropdownItem>

                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </Col>
                          <Col xl='1'>
                            <Switch defaultChecked onChange={this.onChange} /></Col></Row>

                        <CardBody>
                          <Row>
                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '16px',}}>In Queue</span>
                            </Col>
                            <Col lg='6' xl='3'>

                              <span style={{ fontSize: '16px',}}>Impression </span>
                            </Col>

                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '16px' ,}}> Revenue </span>
                            </Col>

                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '16px' ,}}>Clicks</span>
                            </Col>
                          </Row>
                          <Row>

                            <Col lg='6' xl='3'>

                              <span style={{ fontSize: '22px',  }}>400 </span>
                            </Col>



                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '22px', }}>62</span>
                            </Col>
                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '22px', }}> $7558 </span>
                            </Col>

                            <Col lg='6' xl='3'>
                              <span style={{ fontSize: '22px',}}>25</span>
                            </Col> </Row>


                        </CardBody>
                      </Card>
                      :
                      this.state.title === 'Welcome Notification' ?
                        <Card className=" shadow">
                          <Row>
                            <Col xl='10'> <h2 className=" bg-transparent">
                              Welcome Notification
              </h2></Col>
                            <Col xl='1'>
                              <Switch defaultChecked onChange={this.onChange} /></Col></Row>

                          <CardBody>
                            <Row>
                              <Col lg='6' xl='3'>

                                <span style={{ fontSize: '16px' ,}}>In Queue </span>
                              </Col>

                              <Col lg='6' xl='3'>

                                <span style={{ fontSize: '16px'}}>Impression </span>
                              </Col>



                              <Col lg='6' xl='3'>
                                <span style={{ fontSize: '16px', }}>Clicks</span>
                              </Col>
                            </Row>
                            <Row>
                            <Col lg='6' xl='3'>

<span style={{ fontSize: '22px',  }}>0 </span>
</Col>


                              <Col lg='6' xl='3'>

                                <span style={{ fontSize: '22px',  }}>525 </span>
                              </Col>


                              <Col lg='6' xl='3'>
                                <span style={{ fontSize: '22px', }}>78</span>
                              </Col> </Row>


                          </CardBody>
                        </Card>
                        :
                        <div></div>
                  }
                  {this.state.title === 'Welcome Notification' ?
                    <Tabs defaultActiveKey="1" >

                      <TabPane tab="Flow" key="1">
                        <Card className="card-stats mb-0 mb-xl-0" >
                          <CardBody  >
                            <Row>
                              <div className="col">

                                <span
                                  style={{ fontSize: "18px", paddingTop: 10, fontWeight: 'bold', textAlign: 'center' }}
                                >

                                  Notification  Preview
                            </span>


                                <br />
                                <br />

                                <div >
                                  {/* <span className="h5 font-weight-bold mb-0" style={{background:'lightgrey',borderRadius:'10%',textAlign:'center'}}>Android</span> */}
                                  <Row>
                                    <Col lg="8" xl="4">
                                      <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                                    <Col lg="8" xl="4">
                                      <input type="radio" id="Window" name="sendnow" value="Window" checked={this.state.category === "Window"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                                    </Col>

                                    <Col lg="8" xl="4">
                                      <input type="radio" id="Mac" name="sendnow" value="Mac" checked={this.state.category === "Mac"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xl='2'></Col>
                                    <Col xl='8'>
                                      <div style={{ textAlign: 'center', backgroundColor: '#DCDCDC' }}>
                                        <h4 style={{ padding: 5 }}>TRIGGER</h4>
                                        <h5 style={{ padding: 5, marginTop: -13 }}>When a new visitor subscribe</h5>
                                      </div>
                                    </Col>
                                  </Row>

                                  <br />
                                  <h3 style={{ textAlign: 'center' }}>Send Immediately</h3>

                                  <br />
                                  <Row>
                                    <Col xl='2'></Col>
                                    <Col xl='6'>
                                      <h3 style={{ textAlign: 'center', color: 'darkgrey' }}>Push Notification</h3>

                                    </Col>
                                    <Col xl='2'>                            <Edit
                                      size={58}
                                      strokeWidth={2}
                                      color={'black'}
                                    /></Col>


                                    {this.state.category === 'Android' ?
                                      <Android data={automation}
                                      /> :
                                      this.state.category === 'Window' ?
                                        <Window data={automation} /> :
                                        this.state.category === 'Mac' ?
                                          <Mac data={automation} /> :
                                          null
                                    }
                                  </Row>

                                </div>

                              </div>


                            </Row>

                          </CardBody>
                        </Card>

                      </TabPane>
                    </Tabs>

                    :
                    this.state.title === 'Recover Abandoned Carts' ?

                      <Tabs defaultActiveKey="1" >
                        <TabPane tab="Flow" key="1">
                          <Card className="card-stats mb-0 mb-xl-0" >
                            <CardBody  >
                              <Row>
                                <div className="col">

                                  <span
                                    style={{ fontSize: "18px", paddingTop: 10, fontWeight: 'bold', textAlign: 'center' }}
                                  >

                                    Notification  Preview
            </span>


                                  <br />
                                  <br />

                                  <div >
                                    {/* <span className="h5 font-weight-bold mb-0" style={{background:'lightgrey',borderRadius:'10%',textAlign:'center'}}>Android</span> */}
                                    <Row>
                                      <Col lg="8" xl="4">
                                        <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"} onClick={this.handleChange} />
&nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                                      <Col lg="8" xl="4">
                                        <input type="radio" id="Window" name="sendnow" value="Window" checked={this.state.category === "Window"} onChange={this.onoptionChanged} onClick={this.handleChange} />
&nbsp; &nbsp;<label htmlFor="Window">Window </label>
                                      </Col>

                                      <Col lg="8" xl="4">
                                        <input type="radio" id="Mac" name="sendnow" value="Mac" checked={this.state.category === "Mac"} onChange={this.onoptionChanged} onClick={this.handleChange} />
&nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xl='2'></Col>
                                      <Col xl='8'>
                                        <div style={{ textAlign: 'center', backgroundColor: '#DCDCDC' }}>
                                          <h4 style={{ padding: 5 }}>TRIGGER</h4>
                                          <h5 style={{ padding: 5, marginTop: -13 }}>When a new visitor subscribe</h5>
                                        </div>
                                      </Col>
                                    </Row>

                                    <br />

                                    <br />
                                    <Row>
                                      <Col xl='12'>
                                        <Card className=" shadow">
                                          <Row>
                                            <Col xl='4'> <h2 className=" bg-transparent">
                                              REMINDER 1
              </h2></Col>
                                            <Col xl='2'>                   <Edit
                                              size={58}
                                              strokeWidth={2}
                                              color={'black'}
                                            /></Col>
                                            <Col xl='4'></Col>
                                            <Col xl='1'>
                                              <Switch defaultChecked onChange={this.onChange} /></Col>
                                            <span >&nbsp;&nbsp;&nbsp;Wait for  &nbsp;
                      <Select defaultValue="50 min" style={{ width: 120 }} onChange={this.handleReminder}>
                                                <Option value="50 min">50 min</Option>
                                                <Option value="1 day">1 day</Option>

                                                <Option value="2 day">2 day</Option>
                                              </Select> &nbsp;after cart is abandoned, then send</span>
                                          </Row>

                                          <CardBody>



                                            {this.state.category === 'Android' ?
                                              <Android data={automation}
                                              /> :
                                              this.state.category === 'Window' ?
                                                <Window data={automation} /> :
                                                this.state.category === 'Mac' ?
                                                  <Mac data={automation} /> :
                                                  null
                                            }
                                          </CardBody>
                                        </Card>
                                      </Col>

                                    </Row>

                                  </div>

                                </div>


                              </Row>

                            </CardBody>
                          </Card>

                        </TabPane>
                        <TabPane tab="Reports" key="2">
                          <Card className="shadow">
                            <CardHeader className="border-0">
                              <Row className="align-items-center">
                                <div className="col">
                                  <h3 className="mb-0">Wait List</h3>
                                </div>

                              </Row>
                            </CardHeader>
                            <h5>No Product Available</h5>
                            {/* <Table className="align-items-center table-flush" responsive>
  <thead className="thead-light">
    <tr>
      <th scope="col">Country</th>
      <th scope="col"> Subscribers %</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td >United State</td>
      <td>82.7 %</td>
  
     
    </tr>
    <tr>
      
      <td>Hong Kong</td>
      <td>22.7</td>
     
    </tr>
    <tr>
      <td>Malaysia</td>
      <td>7.2</td>
      
    </tr>
  
  </tbody>
</Table> */}
                          </Card>
                          <br />
                          <Card className="shadow">
                            <CardHeader className="border-0">
                              <Row className="align-items-center">
                                <div className="col">
                                  <h3 className="mb-0">Send List</h3>
                                </div>

                              </Row>
                            </CardHeader>
                            <h5>No Product Available</h5>
                            {/* <Table className="align-items-center table-flush" responsive>
  <thead className="thead-light">
    <tr>
      <th scope="col">Country</th>
      <th scope="col"> Subscribers %</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td >United State</td>
      <td>82.7 %</td>
  
     
    </tr>
    <tr>
      
      <td>Hong Kong</td>
      <td>22.7</td>
     
    </tr>
    <tr>
      <td>Malaysia</td>
      <td>7.2</td>
      
    </tr>
  
  </tbody>
</Table> */}
                          </Card>

                        </TabPane>

                      </Tabs>
                      :
                      <Tabs defaultActiveKey="1" >
                        <TabPane tab="Flow" key="1">
                          <Card className="card-stats mb-0 mb-xl-0" >
                            <CardBody  >
                              <Row>
                                <div className="col">

                                  <span
                                    style={{ fontSize: "18px", paddingTop: 10, fontWeight: 'bold', textAlign: 'center' }}
                                  >

                                    Notification  Preview
                            </span>


                                  <br />
                                  <br />

                                  <div >
                                    {/* <span className="h5 font-weight-bold mb-0" style={{background:'lightgrey',borderRadius:'10%',textAlign:'center'}}>Android</span> */}
                                    <Row>
                                      <Col lg="8" xl="4">
                                        <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                                      <Col lg="8" xl="4">
                                        <input type="radio" id="Window" name="sendnow" value="Window" checked={this.state.category === "Window"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                                      </Col>

                                      <Col lg="8" xl="4">
                                        <input type="radio" id="Mac" name="sendnow" value="Mac" checked={this.state.category === "Mac"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xl='2'></Col>
                                      <Col xl='8'>
                                        <div style={{ textAlign: 'center', backgroundColor: '#DCDCDC' }}>
                                          <h4>TRIGGER</h4>
                                          <h5>When a new visitor subscribe</h5>
                                        </div>
                                      </Col>
                                    </Row>

                                    <br />
                                    <h3 style={{ textAlign: 'center' }}>Send Immediately</h3>

                                    <br />
                                    <Row>
                                      <Col xl='2'></Col>
                                      <Col xl='6'>
                                        <h3 style={{ textAlign: 'center', color: 'darkgrey' }}>Push Notification</h3>

                                      </Col>
                                      <Col xl='2'>                            <Edit
                                        size={58}
                                        strokeWidth={2}
                                        color={'black'}
                                      /></Col>


                                      {this.state.category === 'Android' ?
                                        <Android data={automation}
                                        /> :
                                        this.state.category === 'Window' ?
                                          <Window data={automation} /> :
                                          this.state.category === 'Mac' ?
                                            <Mac data={automation} /> :
                                            null
                                      }
                                    </Row>

                                  </div>

                                </div>


                              </Row>

                            </CardBody>
                          </Card>

                        </TabPane>
                        <TabPane tab="Widget" key="2">
                          <Card className="card-stats mb-4 mb-xl-0 card" >
                            <CardHeader className=" bg-transparent">
                              Preview
                 </CardHeader>
                            <CardBody  >
                              <Row>
                                <Col xl='10'>
                                  <h5>  Get Notification when a item is back in stock</h5></Col>
                                <Col xl='1' ><Button type='primary'>Get Alert</Button></Col>

                              </Row>
                            </CardBody>
                          </Card>
                          <br/>
                          <Row>
                            <Col lg="24" xl="12" >
                              <Card className="card-stats mb-4 mb-xl-0 card" >
                                <CardHeader className=" bg-transparent">
                                  Content
                 </CardHeader>
                                <CardBody style={{ position: 'relative' }}>
                                  <Row>
                                    <div className="col">
                                      <label>Mesage before subscribing</label>
                                      <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">

                                          <Input placeholder="Enter Message before subscribing" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />
                                        </InputGroup>
                                      </FormGroup>
                                      <label>Mesage after subscribing</label>
                                      <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">

                                          <Input placeholder="Enter Message after subscribing" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />
                                        </InputGroup>
                                      </FormGroup>
                                      <label>Button to Subscribe </label>
                                      <FormGroup className="mb-3">

                                        <Input placeholder="Button to Subscribe" type="text" name='message' onChange={(e) => this.setState({ message: e.target.value })} />

                                      </FormGroup>
                                    </div>
                                  </Row></CardBody>
                              </Card>
                            </Col>
                          </Row>
                          
                        </TabPane>
                        <TabPane tab="Reports" key="3">
                          <Card className="shadow">
                            <CardHeader className="border-0">
                              <Row className="align-items-center">
                                <div className="col">
                                  <h3 className="mb-0">Wait List</h3>
                                </div>

                              </Row>
                            </CardHeader>
                            <h5>No Product Available</h5>
                            {/* <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Country</th>
                      <th scope="col"> Subscribers %</th>
           
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >United State</td>
                      <td>82.7 %</td>
                  
                     
                    </tr>
                    <tr>
                      
                      <td>Hong Kong</td>
                      <td>22.7</td>
                     
                    </tr>
                    <tr>
                      <td>Malaysia</td>
                      <td>7.2</td>
                      
                    </tr>
                  
                  </tbody>
                </Table> */}
                          </Card>
                          <br />
                          <Card className="shadow">
                            <CardHeader className="border-0">
                              <Row className="align-items-center">
                                <div className="col">
                                  <h3 className="mb-0">Send List</h3>
                                </div>

                              </Row>
                            </CardHeader>
                            <h5>No Product Available</h5>
                            {/* <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Country</th>
                      <th scope="col"> Subscribers %</th>
           
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >United State</td>
                      <td>82.7 %</td>
                  
                     
                    </tr>
                    <tr>
                      
                      <td>Hong Kong</td>
                      <td>22.7</td>
                     
                    </tr>
                    <tr>
                      <td>Malaysia</td>
                      <td>7.2</td>
                      
                    </tr>
                  
                  </tbody>
                </Table> */}
                          </Card>

                        </TabPane>

                      </Tabs>

                  }

                </Col>

              </Row>

            </div>
          </Row>
          <br />
        </Container>

      </>
    );
  }
}

export default Annotation;
