import React from "react";
import { Plus } from 'tabler-icons-react';
import './optin.css';
// reactstrap components
import { Button } from 'antd';
import {

  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";
import { Tabs } from 'antd';
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Checked } from 'antd';
import { Upload } from 'antd';

import ImgCrop from 'antd-img-crop';
import { Select, Checkbox } from 'antd';
import { Progress } from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;
var fileList = '';
var desktop="top-left"
export default class Setting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      banner: '',
      category: 'Desktop',
      title: 'Notification title here',
      message: 'Notification message here',
      allow: 'Allow',
      background: '#2E5FDC',
      color: '#000',
      later: 'Later',
      check: 'false',
      desktop:"top-left",
      mobile:'top',
      logo: "data:image/png;base64,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"

    }
  }
  onChangecheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {

    return (
      <>

<CompaignsHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Overlay" key="1">
              <Row>
                <Col lg="12" xl="6" >
                  <Card className="" >
                    <CardHeader className=" bg-transparent">
                    Store Details
                    </CardHeader>

                    <CardBody >
                      <Row>
                        <Col xl='6' lg='12'>
                        <label>Store Logo</label>
                            <br />
                        <ImgCrop rotate>
                              <Upload

                                listType="picture-card"
                                fileList={fileList}
                                onChange={this.onChangelogo}
                                onPreview={this.onPreview}
                              >
                                {fileList.length < 1 && '+ Upload'}
                              </Upload>
                            </ImgCrop>
 </Col>
 <Col xl='6' lg='12'>
                        <label>Notification Badge</label>
                            <br />
                        <ImgCrop rotate>
                              <Upload

                                listType="picture-card"
                                fileList={fileList}
                                onChange={this.onChangelogo}
                                onPreview={this.onPreview}
                              >
                                {fileList.length < 1 && '+ Upload'}
                              </Upload>
                            </ImgCrop>
 </Col>            
    </Row>
    <Row>
    <Col xl='6' lg='12'>
    <label>UserName</label>
                            <FormGroup className="mb-3">


                              <Input placeholder="Enter Title" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />

                            </FormGroup>
                            <label>Store Name </label>
                            <FormGroup className="mb-3">

                              <Input placeholder="Enter Description" type="text" name='message' onChange={(e) => this.setState({ message: e.target.value })} />

                            </FormGroup>
                            <label>Store URL </label>
                            <FormGroup className="mb-3">

                              <Input placeholder="Enter Description" type="text" name='message' onChange={(e) => this.setState({ message: e.target.value })} />

                            </FormGroup>
                            </Col>
                            </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="12" xl="6" >
                  <Card className="" >
                    <CardHeader className=" bg-transparent">
                    Plans
                    </CardHeader>

                    <CardBody >
                      <Row>
                        <Col xl='6' lg='12'>
                        <label>Current Plan</label>
                            <br />
                        <span>Basic $0</span> &nbsp; &nbsp; &nbsp;<span style={{color:'blue'}}>Change Plan</span>
                        </Col><Col xl='6' lg='12'>
                        <label>Impression Limit</label>
                       
                       <Progress percent={30}  size="small" />
                       <h5 className="text-overflow m-0">Impression (7/900 used)!</h5>
                       <span style={{color:'blue'}}>+ Add Impression</span>
 </Col>
          
    </Row>
    
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Privacy" key="2">
            <Card className="card-stats mb-4 mb-xl-0 card">
                    <CardHeader className=" bg-transparent">
                  User
                    </CardHeader>

                    <CardBody >
                        <span style={{fontSize:'14px',fontWeight:'bold'}}>USAGE ACCESS</span>&nbsp;&nbsp; <span style={{color:'blue'}}>Learn More</span>
                        <p style={{fontWeight:'500',fontSize:12}}> Logo uses third party integration and tools to offer better support to our users.</p>
                        <span style={{backgroundColor:'#00B0E7',color:'white',fontWeight:'bold',padding:2}}>Recommended</span><br/>
                        <Checkbox checked>Allow Logo to use support tools</Checkbox>
                        </CardBody>
                        </Card>
                        <br/>
                        <Card className="card-stats mb-4 mb-xl-0 card">
                    <CardHeader className=" bg-transparent">
                  Subscriber
                    </CardHeader>
<Row>
    <Col xl='6'>
    <CardBody >
                        <span style={{fontSize:'14px',fontWeight:'bold'}}>IP ADDRESS</span>&nbsp;&nbsp; <span style={{color:'blue'}}>Learn More</span>
                        <p style={{fontWeight:'500',fontSize:12}}>Choose weather or not you want to collect and store the anonymized IP addresses(classified as personal data under AGPR) of your subscribers.</p>
                        <span style={{backgroundColor:'#00B0E7',color:'white',fontWeight:'bold',padding:2}}>Recommended</span><br/>
                        <input type="radio" id="Android" name="sendnow" value="Android"   checked />
  &nbsp; &nbsp;<label htmlFor="Android">Collect anonymized IP address (Recommended)</label><br/>
  <input type="radio" id="Android" name="sendnow" value="Android"   />
  &nbsp; &nbsp;<label htmlFor="Android">Do not collect any IP address</label>  </CardBody>
  </Col>
    <Col xl='6'>
    <CardBody >
                        <span style={{fontSize:'14px',fontWeight:'bold'}}>GEO LOCATION</span>&nbsp;&nbsp; <span style={{color:'blue'}}>Learn More</span>
                        <p style={{fontWeight:'500',fontSize:12}}>By enabling Geo location, Logo will collect IP address in order to get the location information about any subscribers</p>
                        <span style={{backgroundColor:'#00B0E7',color:'white',fontWeight:'bold',padding:2}}>Recommended</span><br/>
                        <Checkbox checked>Enable Geo Location</Checkbox>
                        </CardBody>
    </Col>
</Row>
                   
<Row>
    <Col xl='6'>
    <CardBody >
                        <span style={{fontSize:'14px',fontWeight:'bold'}}>NOTIFICATION PREFERENCES</span>&nbsp;&nbsp; <span style={{color:'blue'}}>Learn More</span>
                        <p style={{fontWeight:'500',fontSize:12}}>Choose weather or not you want to collect and store the anonymized IP addresses(classified as personal data under AGPR) of your subscribers.</p>
                        <span style={{backgroundColor:'#FCE790',color:'black',fontWeight:'100',padding:2}}>Your subscribers will not be shown the notification preference wigdet</span><br/>
              </CardBody>
  </Col>
    <Col xl='6'>
    <CardBody >
                        <span style={{fontSize:'14px',fontWeight:'bold'}}>CUSTOMER ID</span>&nbsp;&nbsp; <span style={{color:'blue'}}>Learn More</span>
                        <p style={{fontWeight:'500',fontSize:12}}>By enabling Geo location, Logo will collect IP address in order to get the location information about any subscribers</p>
                        <span style={{backgroundColor:'#00B0E7',color:'white',fontWeight:'bold',padding:2}}>Recommended</span><br/>
                        <Checkbox checked>Enable Collection of shopify Customer IDs</Checkbox>
                        </CardBody>
    </Col>
</Row>
                        </Card>
            </TabPane>
            </Tabs>
            <br/>
            </Container>
            </>
            );
            }
            }