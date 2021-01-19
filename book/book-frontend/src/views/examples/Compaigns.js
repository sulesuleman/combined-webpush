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
import './campaigns.css';
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {

  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  CardTitle
} from "reactstrap";
// core components
import { User, Plus } from 'tabler-icons-react';
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import { List, Avatar, Button, Card, Space } from 'antd';
import { UserOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';
const { Meta } = Card;
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const data = [
  {
    title: 'Title 1',
    id:'1'
  },
  {
    title: 'Title 2',
    id:'2'
  },
];
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const { TabPane } = Tabs;
class Compaigns extends React.Component {
  state = {
    hover: false,

    initLoading: true,
    loading: false,
    data: [],
    list: [],

  };

  Startcampaign = () => {

    window.location = `/admin/StartCampaign`;

  }
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }
  callback = (key) => {
    console.log(key);
  }
  render() {
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
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <Row>

                    <Col lg="5" md="6" sm="8" xl="3">



                      <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "green", border: 0, width: "75%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.Startcampaign}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          <Plus
                            size={50}
                            strokeWidth={2.5}
                            color={'#ffffff'}
                          />
                          <span style={{ color: "white", fontWeight: 'bold' }}>Start Campaign</span>
                        </div>
                      </button>

                    </Col>
                    <Col lg="6" md="8" xl="7"></Col>
                    <Col lg="3" md="8" xl="2" className="cardfilter">
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
                  </Row>
                </CardHeader>
                <CardBody>
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Sent" key="1">
                      <center><h5 className="h4 mb-0 text-black text-uppercase d-none d-lg-inline-block">Campaign Statistics</h5></center>
                      <br />      {/* <Container fluid>
            <div className="header-body">
            
              <Row>
                <Col lg="24" xl="12">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                           
                          </CardTitle>
                         
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                      <Col lg="3" xl="3">
                              <span>
                            <img
                        alt="..."
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                    width='200px' height='150px'  />
                      </span>
                    
                    
                    
                      </Col>
                      <Col  lg="5" xl="4" className="cardcampaign">
                      
                   Black Friday 30% OFF on all Products
                      
                      </Col>      
                     <Col  lg="3" xl="2" className="cardcampaign">
                     <Row>
                       Impression
                       </Row>
                       <Row>
                         525</Row>
                         
                         </Col>
                         
                         
                          <Col lg="3" xl="2" className="cardcampaign">
                     <Row>
                       Clicks
                       </Row>
                       <Row>
                         37</Row>
                         </Col>
                         
                         
                          <Col  lg="3" xl="1" className="cardcampaign">
                     <Row>
                       Revenue
                       </Row>
                       <Row>
                         7,882 PHP</Row>
                         </Col>
                        </Row>
                         
                    
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> Subscriber
                        </span>{" "}
                        <span className="text-nowrap">about two weeks ago</span>&nbsp;&nbsp;
                        <span className="text-nowrap">ID 45545117</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                       
                      
                   
             
           </Row>
            </div>
          </Container>
         */}
                      <List
                        grid={{ gutter: 16, column: 2 }}
                        dataSource={data}
                        renderItem={item => (
                          <List.Item>
                            <Card className="card-stats mb-4 mb-xl-0 card">
                            <span style={{ fontSize: '14px', marginTop: 3 }}>&nbsp;{item.id}</span>
                            
                             
                              <span style={{ fontSize: '14px', marginTop: -2 ,float:'right'}}>&nbsp;All Subscribers</span>
                              <User
                                size={15}
                                strokeWidth={2}
                                color={'#000000'}
                                style={{ marginBottom: 3 ,float:'right'}}
                              />
                              <br />
                              <br />
                              <Meta

                                avatar={
                                  <img src={require("assets/img/theme/team-4-800x800.jpg")}
                                    width='160px' height='100px' />
                                }
                                title={item.title}
                                description="  Black Friday 30% OFF on all Products"
                              />
                              <br></br>
                              <Row>
                                <Col lg='8' xl='4'>
                            
                              <span style={{ fontSize: '21px' }}>Impression </span>
                              </Col>
     
<Col lg='8' xl='4'>
        <span style={{ fontSize: '21px' }}> Revenue </span> 
        </Col>
        
        <Col lg='8' xl='3'>
        <span style={{ fontSize: '21px' }}>&nbsp;&nbsp;&nbsp;Clicks</span>    
</Col> </Row>
<Row>

                                <Col lg='4' xl='2'>
                            
                              <span style={{ fontSize: '16px' ,fontFamily: "Helvetica, sans-serif" }}>525 </span>
                              </Col>
                              <Col lg='4' xl='2'></Col>
<Col lg='8' xl='3'>
        <span style={{ fontSize: '16px',fontFamily: "Helvetica, sans-serif" }}> 7858 PHP </span> 
        </Col>
        <Col lg='8' xl='1'></Col>
        <Col lg='8' xl='2'>
        <span style={{ fontSize: '16px' ,fontFamily: "Helvetica, sans-serif" }}>&nbsp;&nbsp;&nbsp;&nbsp;78</span>    
</Col> </Row>
          <br></br>
                              <br></br>

                              <span style={{ float: 'left' ,fontFamily: "Helvetica, sans-serif" }}>&nbsp;   2 month ago </span>
                              <span style={{ float: 'right',fontFamily: "Helvetica, sans-serif"  }}>Campaign ID: 569853</span>
                            </Card>

                          </List.Item>
                        )}
                      />
                    </TabPane>
                    <TabPane tab="Scheduled" key="2">
                      <div className="cardschulde">
                        <img
                          alt="..."
                          src={require("assets/img/theme/welcoming leopard-01-01.png")}
                        />
                        <h4>Start a new Campaign!!</h4>
                        <Row>

<Col lg="24" md="24" sm="24" xl="12">
                        <button
                          className=" btn-icon-clipboard "
                          id="tooltip982655500"
                          type="button"
                          style={{ background: "green", border: 0, width: "18%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                          onClick={this.Startcampaign}
                        >
                          <div>
                            {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                            <Plus
                              size={50}
                              strokeWidth={2.5}
                              color={'#ffffff'}
                            />
                            <span style={{ color: "white", fontWeight: 'bold' }}>Start Campaign</span>
                          </div>
                        </button>
</Col>
</Row>
                      </div>

                    </TabPane>

                  </Tabs>

                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Compaigns;
