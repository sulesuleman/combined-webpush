
import React  ,{useState,Fragment} from "react";
import './campaigns.css';
import { Lock, InfoSquare } from 'tabler-icons-react';
import { Modal } from 'antd';
import Draggable from 'react-draggable';

// reactstrap components
import WindowChrome from './Windows/chrome'
import WindowOpera from './Windows/opera'
import WindowChrome10 from './Windows/chromewindow10'
import WindowOpera10 from './Windows/operawindow10'
import Firefox from './Windows/firefox'
import Edge from './Windows/edge'
import AndroidChrome from './Android/chrome'
import AndroidFirefox from './Android/firefox'
import AndroidOpera from './Android/opera'
import MacChrome from './Mac/chrome'
import MacSafari from './Mac/safari'
import MacOpera from './Mac/opera'
import MacFirefox from './Mac/firefox'
import { Upload,Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

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

import Android from './Android/AndroidPage'
import Mac from './Mac/macpage'
import Window from './Windows/windowpage'
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Steps, message } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import ReactDOM from 'react-dom'
import { Edit, Bell } from 'tabler-icons-react';
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Step } = Steps;
const steps = [
  {
    title: 'Campaign Details',
    content: 'First-content',
  },
  {
    title: 'Create Notification',
    content: 'Second-content',
  },
  {
    title: 'Summary',
    content: 'Last-content',
  },
];


class StartCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  next = () => {

    const current = this.state.current + 1;
    this.setState({ current });
  };

  prev = () => {

    const current = this.state.current - 1;
    this.setState({ current });
  };
  render() {
    

    return (
      <>
        <CompaignsHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid style={{position:'absolute', overflow: 'hidden'}}>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">

                  <>
                    <Steps current={this.state.current}>
                      {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                      ))}
                    </Steps>
                    <br />
                    <div className="steps-content">
                      {
                        this.state.current === 0 ?
                          <CampaignDetails />
                          :
                          this.state.current === 1 ?
                            <CampaignNotification style={{position:'relative'}}/>
                            :
                            this.state.current === 2 ?
                              <Summary />
                              :
                              <div></div>

                      }</div>
                    <br />

                    <div className="steps-action" style={{float:'right'}}>
                     
                     
                      {this.state.current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={this.prev}>
                          Previous
                        </Button>
                      )}
                       {this.state.current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                          Send
                        </Button>
                      )}
                       {this.state.current < steps.length - 1 && (
                        <Button type="primary" onClick={this.next}>
                          Continue
                        </Button>
                      )}
                    </div>
                  </>
                </CardHeader>




                <CardBody>

                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default StartCampaign;
var entrydate;
var expirydate;
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
   entrydate=dateString
}
function onChangeexpiry(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
   expirydate=dateString
}
function onOk(value) {
  console.log('onOk: ', value);
}
var category = 'RegularCampaign';
var option = 'sendnow';
var show;
class Regular extends React.Component{
  render(){
    return(
      <div>
          <h5>select date to Schedule</h5>
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />

          </Space>
        </div>

    )
  }
}
class Flash extends React.Component{
  render(){
    return(
      <div>
      <h5>select date to Schedule</h5>
      <Space direction="vertical" size={12}>
        <DatePicker showTime onChange={onChange} onOk={onOk} />

      </Space>
      <h5>select Expiry date to Schedule</h5>
      <Space direction="vertical" size={12}>
        <DatePicker showTime onChange={onChangeexpiry} onOk={onOk} />

      </Space>
    </div>
 

    )
  }
}
class CampaignDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      toggle: false
    }
  }
   onRadioChanged = (e) => {
    console.log('e.target', e.target.value)
    category = e.target.value;
  
    this.setState({
      toggle: this.state.toggle
    });
    console.log("radio", category)
  }

  onoptionChanged = (e) => {
    option = e.target.value;
    console.log("option", option)
    this.setState({
      toggle: !this.state.toggle
    });
  }


  render() {


    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-4 mb-xl-0 card">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Campaign Category
                            </CardTitle>
                        <br />
                        {/* <select>
                            <option>Regular Campaign</option>
                            <option disabled>Flash Sale Campaign</option>
                          </select>
                           */}
                        <Row >
                          {/* onChange={category=> this.setState({category})} */}
                          <Col lg="12" xl="6">
                            <input type="radio" id="Category" name="Category"
                              value="RegularCampaign" onClick={this.onRadioChanged} checked={category === "RegularCampaign"}   />
  &nbsp; &nbsp;
  <label htmlFor="RegularCampaign">Regular Campaign</label></Col>
                          <Col lg="12" xl="6">
                            <input type="radio" id="Category" name="Category"checked={category === "FlashSaleCampaign"} 
                              value="FlashSaleCampaign" onClick={this.onRadioChanged} />
  &nbsp; &nbsp;
  <label htmlFor="FlashSaleCampaign">Flash Sale Campaign</label>
                          </Col>




                        </Row>                        </div>

                    </Row>
                  </CardBody>
                </Card>

                <br />

                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-mutedcard mb-0 "

                        >
                          Sending Options
                            </CardTitle>
                        <br />
                        <Row>
                          <Col lg="12" xl="6">
                            <input type="radio" id="sendnow" name="sendnow" value="sendnow" checked={option === "sendnow"}   onClick={this.onoptionChanged} />
  &nbsp; &nbsp;<label htmlFor="sendnow">Send Now</label></Col>
                          <Col lg="12" xl="6">
                            <input type="radio" id="Schedule" name="sendnow" value="Schedule" checked={option === "Schedule"}  onClick={this.onoptionChanged} />
  &nbsp; &nbsp;<label htmlFor="Schedule">Schedule</label>
                          </Col>

                        </Row>
                        {category === 'RegularCampaign' && option=== "Schedule"?
                            <Regular 
                              /> :
                              category === 'FlashSaleCampaign' && option=== "Schedule"?
                            <Flash 
                              /> :
                              <div></div>
                          }
                      </div>
                    </Row>
                  </CardBody>
                </Card>
                <br />
                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Subscribers Segment
                            </CardTitle>
                        <br />
                        <span className="h5 font-weight-bold mb-0">
                        </span>
                        <Select style={{ width: '100%' }} placeholder=" Segments you would like to send campaigns to" >

                          <Option value="1">All Subscribers</Option>
                          <Option value="2">Haven't bought in last 90 days</Option>
                          <Option value="3">Anonymous Subscripbers</Option>
                          <Option value="4">Testing Location Segment</Option>
                          <Option value="5">Mac Subscription</Option>
                          <Option value="6">Mac Subscription</Option>

                        </Select>
                      </div>

                    </Row>

                  </CardBody>
                </Card>


              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        
                        <input type="checkbox" id="SmartDelivery" name="SmartDelivery" value="SmartDelivery" disabled/>
  &nbsp; &nbsp;<label for="SmartDelivery" style={{color:'lightgrey'}}>Smart Delivery </label>&nbsp;<Lock
                              size={50}
                              strokeWidth={2.5}
                              color={'blue'}
                            />
                        <h5>personalize the delivery time of your campaign  for each subscriber by sending the notification to them when they are most likely to be active.</h5>

                        <button
                          className=" btn-icon-clipboard "
                          id="tooltip982655500"
                          type="button"
                          style={{ background: "blue", border: 0, width: "35%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        >
                          <div>
                            {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                            <Lock
                              size={50}
                              strokeWidth={2.5}
                              color={'#ffffff'}
                            />
                            <span style={{ color: "white", fontWeight: 'bold' }}>Premium</span>
                          </div>
                        </button>
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>

            </Row>
          </div>






        </Container>

        {/* </div> */}
      </>
    );
  }
}

   
    
 
var data={}
var title='Enter a Catchy Title';
var messagedata='Enter a Optional Message';
var banner=null;
var logo="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1705/alekseyvanin170501038/77839919-ringing-bell-icon-vector-alarm-solid-logo-illustration-colorful-pictogram-isolated-on-white.jpg";
var  fileList=''
var  logoList=''
var count=0;
class CampaignNotification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      category: 'Android',
      title:'Notification title here',
      message:'Notification message here',
     url:'',
     count:0,
     banner:null,
     button1title:'Button1',
     button2title:'Button2',
     visible: false,
     disabled: true,
     bounds: { left: 0, top: 0, bottom: 0, right: 0 },
   
 logo:"data:image/png;base64,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"

  
    }
  }
  draggleRef = React.createRef();

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = this.draggleRef?.current?.getBoundingClientRect();
    this.setState({
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      },
    });
  };

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ category: event.target.value });

  }
  

 onChange = ({ fileList: newFileList }) => {
    console.log(newFileList)
    fileList=newFileList
    if(newFileList[0].status==='done'){
   this.setState({ banner:URL.createObjectURL(newFileList[0].originFileObj)})
    console.log('bannert',banner)}
    else{
      console.log('hello')
    }
};

 onPreview = async file => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow.document.write(image.outerHTML);
};
onChangelogo = ({ fileList: newFileList }) => {
  console.log(newFileList)
  
  logoList=newFileList
  if(newFileList[0].status==='done'){
 this.setState({ logo:URL.createObjectURL(newFileList[0].originFileObj)})
  console.log('bannert',logo)}
  else{
    console.log('hello')
  }
};

onPreviewlogo = async file => {
let src = file.url;
if (!src) {
  src = await new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
  });
}
const image = new Image();
image.src = src;
const imgWindow = window.open(src);
imgWindow.document.write(image.outerHTML);
};
//  handleAddFields = () => {
//   const values = [...inputFields];
//   values.push({ firstName: '', lastName: '' });
//   setInputFields(values);
// };

//  handleRemoveFields = index => {
//   const values = [...inputFields];
//   values.splice(index, 1);
//   setInputFields(values);
// };
// handleInputChange = (index, event) => {
//   const values = [...inputFields];
//   if (event.target.name === "firstName") {
//     values[index].firstName = event.target.value;
//   } else {
//     values[index].lastName = event.target.value;
//   }

//   setInputFields(values);
// };
uploadbanner=(event)=>{
  console.log(event.target.files[0]);
  this.setState({
      banner:URL.createObjectURL(event.target.files[0])
  })
  console.log("logo",this.state.banner)
}
uploadlogo=(event)=>{
  console.log(event.target.files[0]);
  this.setState({
      logo:URL.createObjectURL(event.target.files[0])
  })
  console.log("logo",this.state.logo)
}
addbutton=()=>{
  this.setState({
    count:1
  })
  this.setState({
    visible: true,
  });
  console.log('count',this.state.count)
}
addbuttonsecond=()=>{
  this.setState({
    count:this.state.count+1
  })
 
  console.log('count',this.state.count)
}
removebutton=()=>{
  this.setState({
    count:this.state.count-1
  })
  console.log('count',this.state.count)
}
handleOk = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};
// onsubmit=()=>{
//   const credentials = {email:"mousuleman@gmail.com", password:"15jan1999"};
//     await axiosInstance.login(credentials).then(res => {
//         if(res.status === 200){
//             localStorage.setItem("userInfo", JSON.stringify(res.data));
//             console.log("Login Credentials :",res.data);
        
//         }
//         else  {
         
//             console.log('Username or Password is incorrect, try again!');
//         }
//     });
//   }
// }
handleCancel = e => {
  console.log(e);
  this.setState({
    count:0
  })
  this.setState({
    visible: false,
  });
};
// getResult=(options)=>{
//   this.refs.reactCroppie.result(options).then( res =>{
//     console.log('response',res)
//   });
// }
render() {
  title=this.state.title
  messagedata=this.state.message
  data={
    title:title,
    message:messagedata,
    banner:this.state.banner,
    logo:this.state.logo,
  count:this.state.count,
button1:this.state.button1title,
button2:this.state.button2title} 

    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid style={{position:'relative'}}>
          <div className="header-body" >
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="6" >
                <Card className="card-stats mb-4 mb-xl-0 card" >
                  <CardBody  style={{position:'relative'}}>
                    <Row>
                      <div className="col">
                      <label>Campaign Name</label><label style={{color:'red'}}>*</label>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                             
                            </InputGroupAddon>
                            <Input placeholder="Enter a Campaign Name" type="text" name='title' onChange={(e)=> this.setState({title:e.target.value})}/>
                          </InputGroup>
                        </FormGroup>
                        <label>Title</label><label style={{color:'red'}}>*</label>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-ruler-pencil" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Enter a Catchy Title" type="text" name='title' onChange={(e)=> this.setState({title:e.target.value})}/>
                          </InputGroup>
                        </FormGroup>
                        <label>Message </label><label style={{color:'red'}}>*</label>
                        <FormGroup className="mb-3">

                          <Input placeholder="Enter a Optional Title" type="textarea" name='message' onChange={(e)=> this.setState({message:e.target.value})}/>

                        </FormGroup>
                        <label style={{color:'darkgrey'}}>Should be less than 500 characters</label>   </div>
                      <br />

                    </Row>
                    <label>URL </label><label style={{color:'red'}}>*</label>
                    <FormGroup className="mb-3">

                      <Input placeholder="Enter Destinational URL" type="text" name='url' onChange={(e)=> this.setState({url:e.target.value})}/>

                    </FormGroup>
                    <Row>                    <Col xl='6'>
                    <label> Banner</label>  <br />
    
    <ImgCrop rotate>
        <Upload
     
          listType="picture-card"
          fileList={fileList}
          onChange={this.onChange}
          onPreview={this.onPreview}
        >
       {fileList.length < 1 && '+ Upload'}
        </Upload>
      </ImgCrop>
     
                    </Col>
                   
                 <Col xl='6'> <label> Logo</label>
                    
                    <br />
                    <ImgCrop rotate>
      <Upload
   
        listType="picture-card"
        fileList={logoList}
        onChange={this.onChangelogo}
        onPreview={this.onPreviewlogo}
      >
     {logoList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop></Col>
    </Row>

                    {/* <Upload onChange={this.onChangePciture}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload> */}
   {/* <Input placeholder="Choose Logo" type="file" name='logo' onChange={this.uploadlogo}/>  */}

                    {/* <button
                      className=" btn-icon-clipboard "
                      id="tooltip982655500"
                      type="button"
                      style={{ background: "blue", border: 0, width: "100%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    >
                      <div> */}
                        {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                        {/* <Lock
                          size={50}
                          strokeWidth={2.5}
                          color={'#ffffff'}
                        />
                        <span style={{ color: "white", fontWeight: 'bold' }}>Upgrade to Unlock</span>
                      </div>
                    </button> */}
                    {/* <label>Banner Image</label>

                    <br />
                    <Input placeholder="Choose Banner Image" type="file" name='banner' onChange={this.uploadbanner}/>

                    <br />
                    <label>Logo</label>

                    <br />
                    <Input placeholder="Choose Logo" type="file" name='logo' onChange={this.uploadlogo}/> */}

                  </CardBody>
                </Card>

              </Col>
              <Col lg="12" xl="6">

                <Card className="card-stats mb-0 mb-xl-0" >
                  <CardBody  >
                    <Row>
                      <div className="col">

                        <span
                          style={{ fontSize: "18px", paddingTop: 10, fontWeight: 'bold' }}
                        >

                          Preview
                            </span>
                        <button
                          className=" btn-icon-clipboard "
                          id="tooltip982655500"
                          type="button"
                          style={{ background: "blue", float: 'right', border: 0, width: "50%", padding: 5, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        >
                          <div>
                            {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                            <InfoSquare
                              size={50}
                              strokeWidth={4}
                              color={'#ffffff'}
                            />
                            <span style={{ color: "white", fontWeight: 'bold' }}>Test Notification</span>
                          </div>
                        </button>

                        <br />
                        <br />
                        <br />
                        <div >
                          {/* <span className="h5 font-weight-bold mb-0" style={{background:'lightgrey',borderRadius:'10%',textAlign:'center'}}>Android</span> */}
                          <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android"   checked={this.state.category === "Android"} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                          {this.state.category === 'Android' ?
                            <Android data={data}
                              /> :
                            this.state.category === 'Window' ?
                              <Window data={data}/> :
                              this.state.category === 'Mac' ?
                                <Mac data={data}/> :
                                null
                          }
                        </div>
                        <br />

                        <div id='notification'></div>
                      </div>


                    </Row>

                  </CardBody>
                </Card>
    
                <Card className="card-stats mb-0 mb-xl-0" style={{marginTop:8}}>
                  <CardBody  >
             
    <div >
    <Button type="primary" onClick={this.addbutton}>
              Add Button
            </Button>
            </div>
     
            <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (this.state.disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
              Add Button
            </div>
          }
          style={{ right:200,top:30}}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="Discard" danger onClick={this.handleCancel}>
              Discard
            </Button>,
            <Button key="Save" type="primary"  onClick={this.handleOk}>
              Save
            </Button>
          ]}
          modalRender={modal => (
            <Draggable
              disabled={this.state.disabled}
              bounds={this.state.bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
 

  
   { this.state.count===1?
 
 <div className="form-row">



<h4>Button 1</h4>

<input
type="text"
className="form-control"
id="title"
name="title"
placeholder='Title'
onChange={(e)=> this.setState({button1title:e.target.value})}
// value={inputField.firstName}
/>         

<input
type="text"
className="form-control"
id="url"
name="url"
placeholder='URL'

// value={inputField.firstName}
style={{marginTop:10}}
/>          


       <div className="form-group col-sm-6"   style={{marginTop:10}}>
       <Button type="primary" onClick={this.addbuttonsecond}>
                 Add Button
               </Button>
     </div>

     </div>
     :
     this.state.count===2?
     <div className="form-row">



     <h4>Button 1</h4>
     <input
type="text"
className="form-control"
id="title"
name="title"
placeholder='Title'
onChange={(e)=> this.setState({button1title:e.target.value})}
// value={inputField.firstName}
/>         

<input
type="text"
className="form-control"
id="url"
name="url"
placeholder='URL'
// value={inputField.firstName}
style={{marginTop:10}}
/>          

     

    <div className="form-group col-sm-6"   style={{marginTop:10}}>
    <Button type="primary" onClick={this.removebutton}>
                Remove Button
              </Button>
      </div>

      <div className="form-group col-sm-6"   style={{marginTop:10}}>
   
      </div>
        


     <h4>Button 2</h4>

     <input
type="text"
className="form-control"
id="title"
name="title"
placeholder='Title'
onChange={(e)=> this.setState({button2title:e.target.value})}
// value={inputField.firstName}
/>         

<input
type="text"
className="form-control"
id="url"
name="url"
placeholder='URL'
// value={inputField.firstName}
style={{marginTop:10}}
/>          


    <div className="form-group col-sm-6"    style={{marginTop:10}}>
    <Button type="primary" onClick={this.removebutton}>
                Remove Button
              </Button>
      </div>
     


</div>
:
<div></div>
}

     </Modal>

             
 
    </CardBody>
    </Card>
              </Col>
       
             
            </Row>
     
          </div>






        </Container>
        {/* </div> */}
      </>
    );
  }
}
// async componentDidMount() {
//   await axiosInstance.getCampaign().then(response => {
//       this.setState({
//           products:response.data,
//           isLoading: false
//       });
//       console.log('userProfileProducts: ',response)                           
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   console.log(this.state.products)
// }
class Summary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      category:'',


    }
  }
  componentDidMount(){
    this.setState({
      category:window.$user
    })
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ category: event.target.value });
  }



  render() {
console.log("summary" , this.state.category)



    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="12">
                <Card className="card-stats mb-4 mb-xl-0 card">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                          style={{textAlign:'center'}}
                        >
                          Campaign Summary
                          <Edit
                            size={48}
                            strokeWidth={2}
                            color={'black'}
                          />
                        </CardTitle>
                        <br />
                        <Row>
                        <Col xl='4'>
                        <span className="h5 font-weight-bold mb-0"> Type of Campaign</span><br />
                        <span style={{ background: '#DCDCDC',color:'black' }} className="h5 font-weight-bold mb-0"> Regular Campaign</span>
                        </Col>
                        <Col xl='4'>
                        <span className="h5 font-weight-bold mb-0"> Sending To</span><br />
                        <span style={{ background: '#DCDCDC' ,color:'black'}} className="h5 font-weight-bold mb-0"> All Subscriber(Subscriber Count 97)</span>
                        </Col>
                        <Col xl='4'>
                        <span className="h5 font-weight-bold mb-0"> Start (Pakistan Standard Time</span><br />
                        <span style={{ background: '#DCDCDC',color:'black' }} className="h5 font-weight-bold mb-0"> Immediately</span>
                        </Col>
                        </Row>
                      </div>

                      
                    </Row>
                  </CardBody>
                </Card>




              </Col>
              </Row>
              <br/>
              <div style={{backgroundColor:'white'}}>
              <br/>
             <p  tag="h3"
                          className="text-uppercase text-mutedcard mb-0"
                          style={{textAlign:'center',fontSize:'16px'}}
                       >Preview Summary</p>
                
               
                       <br/>
              <Row>
              
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                         Android
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                        {this.state.category.android==='ChromeonAndroid'?
                        <AndroidChrome data={data}/> 
                        :
                        this.state.category.android==='FirefoxonAndroid' ?
             <AndroidFirefox data={data}/>:
             this.state.category.android==='OperaonAndroid' ?
             <AndroidOpera data={data}/>
             :
             <div></div>
                      }

                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                        Window 10
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                      {
                        this.state.category.window==='ChromeonWindows10' ?
                        <WindowChrome10   data={data}/>:
                        this.state.category.window==='OperaonWindows10' ?
                        <WindowOpera10   data={data}/>
             :    this.state.category.window==='FirefoxonWindows10' ?
             <Firefox data={data}/> :
             this.state.category.window==='EdgeonWindows10' ?
             <Edge data={data}/>
             :
             <div></div>
                      }
                        
                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0" style={{padding:2}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                         Window 8
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                         {
                        this.state.category.window==='ChromeonWindows10' ?
                        <WindowChrome   data={data}/>:
                        this.state.category.window==='OperaonWindows' ?
                        <WindowOpera   data={data}/>
             :    this.state.category.window==='FirefoxonWindows' ?
             <Firefox data={data}/> :
            
             <WindowChrome data={data}/> 
                      }
                        
                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className=" text-mutedcard mb-0"
                        >
                     macOS
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                    
                    {
                      this.state.category.mac==='SafarionMacOS' ?
                      <MacSafari data={data}/> :
                      this.state.category.mac==='ChromeonMacOS' ?
                      <MacChrome data={data}/> :
                      this.state.category.mac==='FirefoxonMacOS' ?
                      <MacFirefox data={data}/> :
                      this.state.category.mac==='OperaonMacOS' ?
                      <MacOpera data={data}/> :
             <div></div>
                    }
                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </div>
          </div>





        </Container>
        {/* </div> */}
      </>
    );
  }
}

