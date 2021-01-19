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
import { User, Plus } from 'tabler-icons-react';
import countries from './countries.json';
// reactstrap components
import {

  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import {  Switch , Space,Input ,Popconfirm, message} from 'antd';
import UserHeader from "components/Headers/UserHeader.js";
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Select } from 'antd';

const { Option } = Select;
var datafilter1=[]
var citydata=[]
var datacity1=[]
var datacountry1=[]
var dataprogram1=[]
var databrowser1=[]

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Audience Reach',
    dataIndex: 'AudienceReach',
    key: 'AudienceReach',
  },
  {
    title: 'Created On',
    dataIndex: 'CreatedOn',
    key: 'CreatedOn',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">

        <Button  style={{backgroundColor:'#008000',color:'white'}}>Edit  </Button>
      </Space>
    ),
  },
 
 
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
   
<Popconfirm
    title="Are you sure you want to delete this segment?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
        <Button   style={{backgroundColor:'red',color:'white'}}>Delete</Button>
        </Popconfirm>  
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    AudienceReach: 32,
    CreatedOn: 'New York No. 1 Lake Park',
   
  },
  {
    key: '2',
    name: 'Jim Green',
    AudienceReach: 32,
    CreatedOn: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    AudienceReach: 32,
    CreatedOn: 'New York No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'John Brown',
    AudienceReach: 32,
    CreatedOn: 'New York No. 1 Lake Park',
   
  },
  {
    key: '5',
    name: 'Jim Green',
    AudienceReach: 32,
    CreatedOn: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Black',
    AudienceReach: 32,
    CreatedOn: 'New York No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Joe Black',
    AudienceReach: 32,
    CreatedOn: 'New York No. 1 Lake Park',
  },
];
var check=0
class Segments extends React.Component {
    constructor(props){
        super(props)
       this.state={
            check:0,
            count:0
        }
    }
  segment=()=>{
    window.location = `/admin/CreateSegment`;
  }
  check=()=>{
this.setState({check:this.state.check+1});
this.setState({count:this.state.count+1});
check=check+1
console.log(check,'ffhfh')
  }
   remove=()=>{
    console.log(this.state.check)
   this.setState({check:this.state.check-1})
    console.log('jj',this.state.check)

}
  render() {
    return (
      <>
        <CompaignsHeader />
        {/* Page content */}
        <br/>
        <Container className="mt--7" fluid>
<Row>
    <Col xl='8'>
    <Card className="card-stats mb-0 mb-xl-0" >
            <CardHeader className=" bg-transparent" style={{fontWeight:'bold',fontSize:'18px'}}>Segment Title
    
            </CardHeader>
                  <CardBody  >
                  <label>Title</label><label style={{color:'red'}}> *</label>
                            <FormGroup className="mb-3">


                              <Input placeholder="Enter Title" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />

                            </FormGroup>
                      </CardBody>
                      </Card>
                      <br/>
{/*                      
                      {this.state.check>0?
                      <Segmentgroup/>
                       */}
                       {this.state.check===0?
                       <div></div>:
                       <CardHeader className=" bg-transparent" style={{fontWeight:'bold',fontSize:'18px'}}>
                        <i className="fas fa-trash-alt" onClick={this.remove} style={{float:'right'}}/>  Segment Group</CardHeader>
                         }
                       {
                            
                        (function (rows, i, len,count) {
                            
    while (++i <= len) {
  
      rows.push(<div> 
                    
          <Segmentgroup key={i} count={count} /> <br></br>
        <h5 style={{textAlign:'center' ,padding:10,color:'blue'}}>AND</h5>
         <br/></div>)
    }
    return rows;
  })([], 0, this.state.check,this.state.count)}
                    {/* :
                    <div></div>} */}
                   
                
                     <Row>
                         <Col xl='3'></Col>
                         <Col xl='4'> 
                         <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "blue", border: 1,padding:'10px 10px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.check}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          <Plus
                            size={50}
                            strokeWidth={2.5}
                            color={'#ffffff'}
                          />
                          <span style={{ color: "white", fontWeight: 'bold' }}>   Add Segment Group</span>
                        </div>
                      </button> </Col>
                         <Col xl='3'>
                         <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "green", border: 1,padding:'10px 10px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.Startcampaign}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          
                          <span style={{ color: "white", fontWeight: 'bold' }}>  Save Segment</span>
                        </div>
                      </button>
                         </Col>
                     </Row>
                    
                   
        
    </Col>
</Row>
                      </Container>
      </>
    );
  }
}

export default Segments;

class Segmentgroup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            filter:'Filter',
            isnot:'is',
            site:'Site1',
            city:'',
            country:'',
            platform:'',
            browser:'',
            datafilter:[],
            datacity:[],
            datacountry:[],
            dataprogram:[],
            databrowser:[],
            count:0
        }
    }
    onChange=(checked)=> {
        console.log(`switch to ${checked}`);
      }
      handleChange=(value) =>{
        console.log(`selected ${value}`);
        this.setState({filter:value})
        this.setState({count:1})
      }
      isnot=(value) =>{
        console.log(`selected ${value}`);
        this.setState({isnot:value})
      }
      country=(value) =>{
        console.log(`selected ${value}`);
        this.setState({country:value})
      }
      platform=(value) =>{
        console.log(`selected ${value}`);
        this.setState({platform:value})
      }
      browser=(value) =>{
        console.log(`selected ${value}`);
        this.setState({browser:value})
      }
      site=(value) =>{

        console.log(`selected ${value}`);
        this.setState({site:value})
      }
    
      add=()=>{
          this.setState({filter:'Filter'})
    
var website={
    website:'Website',
    is:this.state.isnot,
    site:this.state.site
}
datafilter1.push(website)
 this.setState({datafilter:datafilter1})
console.log(this.state.datafilter)   
// datafilter1=this.state.datafilter
// console.log('bnm',this.state.datafilter)
      }
      addcity=()=>{
        this.setState({filter:'Filter'})
datacity1.push({
  City:'City',
  is:this.state.isnot,
  city:this.state.city
})
var city={
    City:'City',
    is:this.state.isnot,
    city:this.state.city
}

citydata.push(city)
this.setState({
    datacity:citydata}
    )
    this.setState({count:this.state.count+1})
//   datacity1=this.state.datacity
console.log(this.state.datacity)
    }  
    addcountry=()=>{
        this.setState({filter:'Filter'})
var country={
    Country:'Country',
    is:this.state.isnot,
    country:this.state.country
}
        datacountry1.push(country)
 this.setState({datacountry:datacountry1})
 this.setState({count:this.state.count+1})
//   datacountry1=this.state.country
// console.log(this.state.datacountry)
    }
    afterfilter=()=>{
        this.setState({filter:'Filter'})
    }  
    addprogram=()=>{
        this.setState({filter:'Filter'})
        var platform={
            Platform:'Platform',
            is:this.state.isnot,
            platform:this.state.platform
        }
dataprogram1.push(platform)
this.setState({dataprogram:dataprogram1})
this.setState({count:this.state.count+1})
//   dataprogram1=this.state.dataprogram
// console.log(this.state.dataprogram)
    }  
    addbrowser=()=>{
        this.setState({filter:'Filter'})
var browser={
    Browser:'Browser',
    is:this.state.isnot,
    borwser:this.state.browser
}
        databrowser1.push(browser)
this.setState({databrowser:databrowser1})
this.setState({count:this.state.count+1})
//   databrowser1=this.state.browser
// console.log(this.state.databrowser)
    }     
    removebrowser=(x)=>{
        this.state.databrowser.splice(x, 1);
        // databrowser1=this.state.browser
        this.setState({databrowser:this.state.databrowser})
        this.setState({count:this.state.count-1})
    }
        removeplaform=(x)=>{
            this.state.dataprogram.splice(x, 1);
            // dataprogram1=this.state.program
            this.setState({dataprogram:this.state.dataprogram})
            this.setState({count:this.state.count-1})
        }
            removecountry=(x)=>{
                this.state.datacountry.splice(x, 1);
                // datacountry1=this.state.country
                 this.setState({datacountry:this.state.datacountry})

                 this.setState({count:this.state.count-1})                }
                removecity=(x)=>{
                    console.log('index',x)
                    this.state.datacity.splice(x, 1);
                    console.log('rempove',this.state.datacity)
                // datacity1=this.state.city
                 this.setState({datacity:this.state.datacity})
                
                 this.setState({count:this.state.count-1})}
                    removewebsite=(x)=>{
                        this.state.datafilter.splice(x, 1);
                        // datafilter1=this.state.website
                     this.setState({datafilter:this.state.datafilter})
                    
                     this.setState({count:this.state.count-1})}

      remove=()=>{
        console.log('before',check)
     check=check-1
     console.log('after',check)
    }     
    render(){
        console.log('datacitymap',this.state.datacity)
        return(
            <Card className="card-stats mb-0 mb-xl-0" >
                 <CardBody  >
{
this.state.count==0?
    <Row>
    <Col xl='4'>
    {/* <span>AND&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>&nbsp;&nbsp;
              
              <span>OR&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>
              */}
    {/* <span>AND&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>&nbsp;&nbsp;
              
              <span>OR&nbsp;&nbsp; </span> */}
    </Col>
    <Col xl='7'>
    <h5 style={{fontSize:'18px',fontWeight:700}}> Filters</h5>
                <Select defaultValue={this.state.filter}style={{ width: '100%' }} onChange={this.handleChange}>
      
      <Option value="City">City</Option>
      <Option value="Country">Country</Option>
      <Option value="Platform">Platform</Option>
      <Option value="Browser">Browser</Option>
  
    
      </Select>
    </Col>
   {/* <Col xl='1'> <i class="fas fa-trash-alt" onClick={this.remove} style={{float:'right'}}></i></Col> */}
</Row>
:
this.state.count==1?
<div>
<Row>
    <Col xl='4'>
    {/* <span>AND&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>&nbsp;&nbsp;
              
              <span>OR&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>
              */}
    {/* <span>AND&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>&nbsp;&nbsp;
              
              <span>OR&nbsp;&nbsp; </span> */}
    </Col>
    <Col xl='7'>
    <h5 style={{fontSize:'18px',fontWeight:700}}> Filters</h5>
                <Select defaultValue={this.state.filter}style={{ width: '100%' }} onChange={this.handleChange}>
  
      <Option value="City">City</Option>
      <Option value="Country">Country</Option>
      <Option value="Platform">Platform</Option>
      <Option value="Browser">Browser</Option>
  
    
      </Select>
    </Col>
   {/* <Col xl='1'> <i class="fas fa-trash-alt" onClick={this.remove} style={{float:'right'}}></i></Col> */}
</Row>

<div>
<br/>
{    this.state.filter==='City'?
    <div>
        <Row>
            <Col xl='2'>
            <span>City</span> 
            </Col>
            <Col xl='3'>
            <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
      <Option value="is">Is</Option>
      <Option value="isnot">Is not</Option>
      {/* <Option value="Contain">Contain</Option>
      <Option value="notcontain"> Not Contain</Option> */}
      </Select> 
            </Col>
            <Col xl='4'>
            <Input placeholder="Enter City" type="text" name='title' style={{ width: 200 }} onChange={(e) => this.setState({ city: e.target.value })} />
  
            </Col>
            <Col xl='3'>
            <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.addcity}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          
                          <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                        </div>
                      </button>
            </Col>
        </Row>

        </div> 
   :
   this.state.filter==='Country'?
   <div>
       <Row>
           <Col xl='2'>
           <span>Country</span> 
           </Col>
           <Col xl='3'>
           <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
     <Option value="is">Is</Option>
     <Option value="isnot">Is not</Option>
     {/* <Option value="Contain">Contain</Option>
     <Option value="notcontain"> Not Contain</Option> */}
     </Select> 
           </Col>
           <Col xl='4'>
           <Select defaultValue="" style={{ width: '100%' }} onChange={this.country}>
               {
               countries.map((item)=>{
                   return(
       
                    <Option value={item.name}>{item.name}</Option>
         
              
                   )
               })

                
    }
                </Select>
           </Col>
           <Col xl='3'>
           <button
                       className=" btn-icon-clipboard "
                       id="tooltip982655500"
                       type="button"
                       style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                       onClick={this.addcountry}
                     >
                       <div>
                         {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                         
                         <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                       </div>
                     </button>
           </Col>
       </Row>

       </div> 
  
   :
        this.state.filter==='Platform'?
        <div>
            <Row>
                <Col xl='2'>
                <span>Platform</span> 
                </Col>
                <Col xl='3'>
                <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
          <Option value="is">Is</Option>
          <Option value="isnot">Is not</Option>

          </Select> 
                </Col>
                <Col xl='4'>
                <Select defaultValue="Mobile" style={{ width: '100%' }} onChange={this.platform}>
      <Option value="Mobile">Mobile</Option>
      <Option value="Tablet">Tablet</Option>
      <Option value="Desktop">Desktop</Option>
      <Option value="Other"> Other</Option>
      </Select>
                </Col>
                <Col xl='3'>
                <button
                            className=" btn-icon-clipboard "
                            id="tooltip982655500"
                            type="button"
                            style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                            onClick={this.addprogram}
                          >
                            <div>
                              {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                              
                              <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                            </div>
                          </button>
                </Col>
            </Row>
   </div>    
:
this.state.filter==='Browser'?
<div>
    <Row>
        <Col xl='2'>
        <span>Browser</span> 
        </Col>
        <Col xl='3'>
        <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
  <Option value="is">Is</Option>
  <Option value="isnot">Is not</Option>

  </Select> 
        </Col>
        <Col xl='4'>
        <Select defaultValue="Safari" style={{ width: '100%' }} onChange={this.browser} >
<Option value="Safari">Safari</Option>
<Option value="Chrome">Chrome</Option>
<Option value="Firefox">Firefox</Option>
<Option value="Other"> Other</Option>
</Select>
        </Col>
        <Col xl='3'>
        <button
                    className=" btn-icon-clipboard "
                    id="tooltip982655500"
                    type="button"
                    style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    onClick={this.addbrowser}
                  >
                    <div>
                      {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                      
                      <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                    </div>
                  </button>
        </Col>
    </Row>
</div>    
:
<div></div>}
</div></div>
:
this.state.count>=2?
<div>
<div>
     { this.state.datacity.map((item,index)=>{
                   return(
                       <div>
                           <Row>
                               <Col xl='9'>   <h4>{item.City}</h4>
                         
                         <span>{item.City}{'  '}{item.is}{'  '}{item.city}</span>
                        
                        </Col>
                               <Col xl='3'>          <button
                    className=" btn-icon-clipboard "
                    id="tooltip982655500"
                    type="button"
                    style={{ background: "blue", float:'right',border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    onClick={()=>this.removewebsite(index)}
                  >
 <div>
                      {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                      
                      <span style={{ color: "white", fontWeight: 'bold' }}>  Remove</span>
                    </div>
                  </button>
                  </Col>
                           </Row>
                 
                   <br/>
                   <Row>
    <Col xl='4'>
    {/* <span>AND&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>&nbsp;&nbsp;
              
              <span>OR&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>
              */}
    <span>AND&nbsp;&nbsp;   <Switch defaultChecked onChange={this.onChange} /></span>&nbsp;&nbsp;
              
              <span>OR&nbsp;&nbsp; </span>
    </Col>
    <Col xl='7'>
    <h5 style={{fontSize:'18px',fontWeight:700}}> Filters</h5>
                <Select defaultValue={this.state.filter}style={{ width: '100%' }} onChange={this.handleChange}>
  
      <Option value="City">City</Option>
      <Option value="Country">Country</Option>
      <Option value="Platform">Platform</Option>
      <Option value="Browser">Browser</Option>
  
    
      </Select>
    </Col>
   {/* <Col xl='1'> <i class="fas fa-trash-alt" onClick={this.remove} style={{float:'right'}}></i></Col> */}
</Row>
<div>
<br/>
{    this.state.filter==='City'?
    <div>
        <Row>
            <Col xl='2'>
            <span>City</span> 
            </Col>
            <Col xl='3'>
            <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
      <Option value="is">Is</Option>
      <Option value="isnot">Is not</Option>
      {/* <Option value="Contain">Contain</Option>
      <Option value="notcontain"> Not Contain</Option> */}
      </Select> 
            </Col>
            <Col xl='4'>
            <Input placeholder="Enter City" type="text" name='title' style={{ width: 200 }} onChange={(e) => this.setState({ city: e.target.value })} />
  
            </Col>
            <Col xl='3'>
            <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.addcity}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          
                          <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                        </div>
                      </button>
            </Col>
        </Row>

        </div> 
   :
   this.state.filter==='Country'?
   <div>
       <Row>
           <Col xl='2'>
           <span>Country</span> 
           </Col>
           <Col xl='3'>
           <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
     <Option value="is">Is</Option>
     <Option value="isnot">Is not</Option>
     {/* <Option value="Contain">Contain</Option>
     <Option value="notcontain"> Not Contain</Option> */}
     </Select> 
           </Col>
           <Col xl='4'>
           <Select defaultValue="" style={{ width: '100%' }} onChange={this.country}>
               {
               countries.map((item)=>{
                   return(
       
                    <Option value={item.name}>{item.name}</Option>
         
              
                   )
               })

                
    }
                </Select>
           </Col>
           <Col xl='3'>
           <button
                       className=" btn-icon-clipboard "
                       id="tooltip982655500"
                       type="button"
                       style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                       onClick={this.addcountry}
                     >
                       <div>
                         {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                         
                         <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                       </div>
                     </button>
           </Col>
       </Row>

       </div> 
  
   :
        this.state.filter==='Platform'?
        <div>
            <Row>
                <Col xl='2'>
                <span>Platform</span> 
                </Col>
                <Col xl='3'>
                <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
          <Option value="is">Is</Option>
          <Option value="isnot">Is not</Option>

          </Select> 
                </Col>
                <Col xl='4'>
                <Select defaultValue="Mobile" style={{ width: '100%' }} onChange={this.platform}>
      <Option value="Mobile">Mobile</Option>
      <Option value="Tablet">Tablet</Option>
      <Option value="Desktop">Desktop</Option>
      <Option value="Other"> Other</Option>
      </Select>
                </Col>
                <Col xl='3'>
                <button
                            className=" btn-icon-clipboard "
                            id="tooltip982655500"
                            type="button"
                            style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                            onClick={this.addprogram}
                          >
                            <div>
                              {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                              
                              <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                            </div>
                          </button>
                </Col>
            </Row>
   </div>    
:
this.state.filter==='Browser'?
<div>
    <Row>
        <Col xl='2'>
        <span>Browser</span> 
        </Col>
        <Col xl='3'>
        <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
  <Option value="is">Is</Option>
  <Option value="isnot">Is not</Option>

  </Select> 
        </Col>
        <Col xl='4'>
        <Select defaultValue="Safari" style={{ width: '100%' }} onChange={this.browser} >
<Option value="Safari">Safari</Option>
<Option value="Chrome">Chrome</Option>
<Option value="Firefox">Firefox</Option>
<Option value="Other"> Other</Option>
</Select>
        </Col>
        <Col xl='3'>
        <button
                    className=" btn-icon-clipboard "
                    id="tooltip982655500"
                    type="button"
                    style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    onClick={this.addbrowser}
                  >
                    <div>
                      {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                      
                      <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                    </div>
                  </button>
        </Col>
    </Row>
</div>    
:
<div></div>}
</div>
                       </div>     
                   );}
 )}
 </div>
 <div>
 { this.state.datacountry.map((item,index)=>{
    return(
        <div>
              <Row>
                <Col xl='9'> 
            <h4>{item.Country}</h4>
          
            <span>{item.Country}{'  '}{item.is}{'  '}{item.country}</span>
          </Col>
          <Col xl='3'> <button
     className=" btn-icon-clipboard "
     id="tooltip982655500"
     type="button"
     style={{ background: "blue", float:'right',border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
     onClick={()=>this.removecountry(index)}
   >
     <div>
    
       
       <span style={{ color: "white", fontWeight: 'bold' }}>  Remove</span>
     </div>
   </button>
   </Col> 
   </Row>
   <div>
<br/>
{    this.state.filter==='City'?
    <div>
        <Row>
            <Col xl='2'>
            <span>City</span> 
            </Col>
            <Col xl='3'>
            <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
      <Option value="is">Is</Option>
      <Option value="isnot">Is not</Option>
      {/* <Option value="Contain">Contain</Option>
      <Option value="notcontain"> Not Contain</Option> */}
      </Select> 
            </Col>
            <Col xl='4'>
            <Input placeholder="Enter City" type="text" name='title' style={{ width: 200 }} onChange={(e) => this.setState({ city: e.target.value })} />
  
            </Col>
            <Col xl='3'>
            <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.addcity}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          
                          <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                        </div>
                      </button>
            </Col>
        </Row>

        </div> 
   :
   this.state.filter==='Country'?
   <div>
       <Row>
           <Col xl='2'>
           <span>Country</span> 
           </Col>
           <Col xl='3'>
           <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
     <Option value="is">Is</Option>
     <Option value="isnot">Is not</Option>
     {/* <Option value="Contain">Contain</Option>
     <Option value="notcontain"> Not Contain</Option> */}
     </Select> 
           </Col>
           <Col xl='4'>
           <Select defaultValue="" style={{ width: '100%' }} onChange={this.country}>
               {
               countries.map((item)=>{
                   return(
       
                    <Option value={item.name}>{item.name}</Option>
         
              
                   )
               })

                
    }
                </Select>
           </Col>
           <Col xl='3'>
           <button
                       className=" btn-icon-clipboard "
                       id="tooltip982655500"
                       type="button"
                       style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                       onClick={this.addcountry}
                     >
                       <div>
                         {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                         
                         <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                       </div>
                     </button>
           </Col>
       </Row>

       </div> 
  
   :
        this.state.filter==='Platform'?
        <div>
            <Row>
                <Col xl='2'>
                <span>Platform</span> 
                </Col>
                <Col xl='3'>
                <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
          <Option value="is">Is</Option>
          <Option value="isnot">Is not</Option>

          </Select> 
                </Col>
                <Col xl='4'>
                <Select defaultValue="Mobile" style={{ width: '100%' }} onChange={this.platform}>
      <Option value="Mobile">Mobile</Option>
      <Option value="Tablet">Tablet</Option>
      <Option value="Desktop">Desktop</Option>
      <Option value="Other"> Other</Option>
      </Select>
                </Col>
                <Col xl='3'>
                <button
                            className=" btn-icon-clipboard "
                            id="tooltip982655500"
                            type="button"
                            style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                            onClick={this.addprogram}
                          >
                            <div>
                              {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                              
                              <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                            </div>
                          </button>
                </Col>
            </Row>
   </div>    
:
this.state.filter==='Browser'?
<div>
    <Row>
        <Col xl='2'>
        <span>Browser</span> 
        </Col>
        <Col xl='3'>
        <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
  <Option value="is">Is</Option>
  <Option value="isnot">Is not</Option>

  </Select> 
        </Col>
        <Col xl='4'>
        <Select defaultValue="Safari" style={{ width: '100%' }} onChange={this.browser} >
<Option value="Safari">Safari</Option>
<Option value="Chrome">Chrome</Option>
<Option value="Firefox">Firefox</Option>
<Option value="Other"> Other</Option>
</Select>
        </Col>
        <Col xl='3'>
        <button
                    className=" btn-icon-clipboard "
                    id="tooltip982655500"
                    type="button"
                    style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    onClick={this.addbrowser}
                  >
                    <div>
                      {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                      
                      <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                    </div>
                  </button>
        </Col>
    </Row>
    <div>
<br/>
{    this.state.filter==='City'?
    <div>
        <Row>
            <Col xl='2'>
            <span>City</span> 
            </Col>
            <Col xl='3'>
            <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
      <Option value="is">Is</Option>
      <Option value="isnot">Is not</Option>
      {/* <Option value="Contain">Contain</Option>
      <Option value="notcontain"> Not Contain</Option> */}
      </Select> 
            </Col>
            <Col xl='4'>
            <Input placeholder="Enter City" type="text" name='title' style={{ width: 200 }} onChange={(e) => this.setState({ city: e.target.value })} />
  
            </Col>
            <Col xl='3'>
            <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.addcity}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          
                          <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                        </div>
                      </button>
            </Col>
        </Row>

        </div> 
   :
   this.state.filter==='Country'?
   <div>
       <Row>
           <Col xl='2'>
           <span>Country</span> 
           </Col>
           <Col xl='3'>
           <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
     <Option value="is">Is</Option>
     <Option value="isnot">Is not</Option>
     {/* <Option value="Contain">Contain</Option>
     <Option value="notcontain"> Not Contain</Option> */}
     </Select> 
           </Col>
           <Col xl='4'>
           <Select defaultValue="" style={{ width: '100%' }} onChange={this.country}>
               {
               countries.map((item)=>{
                   return(
       
                    <Option value={item.name}>{item.name}</Option>
         
              
                   )
               })

                
    }
                </Select>
           </Col>
           <Col xl='3'>
           <button
                       className=" btn-icon-clipboard "
                       id="tooltip982655500"
                       type="button"
                       style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                       onClick={this.addcountry}
                     >
                       <div>
                         {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                         
                         <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                       </div>
                     </button>
           </Col>
       </Row>

       </div> 
  
   :
        this.state.filter==='Platform'?
        <div>
            <Row>
                <Col xl='2'>
                <span>Platform</span> 
                </Col>
                <Col xl='3'>
                <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
          <Option value="is">Is</Option>
          <Option value="isnot">Is not</Option>

          </Select> 
                </Col>
                <Col xl='4'>
                <Select defaultValue="Mobile" style={{ width: '100%' }} onChange={this.platform}>
      <Option value="Mobile">Mobile</Option>
      <Option value="Tablet">Tablet</Option>
      <Option value="Desktop">Desktop</Option>
      <Option value="Other"> Other</Option>
      </Select>
                </Col>
                <Col xl='3'>
                <button
                            className=" btn-icon-clipboard "
                            id="tooltip982655500"
                            type="button"
                            style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                            onClick={this.addprogram}
                          >
                            <div>
                              {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                              
                              <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                            </div>
                          </button>
                </Col>
            </Row>
   </div>    
:
this.state.filter==='Browser'?
<div>
    <Row>
        <Col xl='2'>
        <span>Browser</span> 
        </Col>
        <Col xl='3'>
        <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
  <Option value="is">Is</Option>
  <Option value="isnot">Is not</Option>

  </Select> 
        </Col>
        <Col xl='4'>
        <Select defaultValue="Safari" style={{ width: '100%' }} onChange={this.browser} >
<Option value="Safari">Safari</Option>
<Option value="Chrome">Chrome</Option>
<Option value="Firefox">Firefox</Option>
<Option value="Other"> Other</Option>
</Select>
        </Col>
        <Col xl='3'>
        <button
                    className=" btn-icon-clipboard "
                    id="tooltip982655500"
                    type="button"
                    style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    onClick={this.addbrowser}
                  >
                    <div>
                      {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                      
                      <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                    </div>
                  </button>
        </Col>
    </Row>
</div>    
:
<div></div>}
</div>
</div>    
:
<div></div>}
</div>
        </div>     
    );}
)}
</div>
<div>
     
  { this.state.dataprogram.map((item,index)=>{
                   return(
                       <div>
                         <Row>
                             <Col xl='9'>
                             <h4>{item.Platform}</h4>
                         
                         <span>{item.Platform}{'  '}{item.is}{'  '}{item.platform}</span>
                        
                             </Col>
                             <Col xl='3'>
                            <button
                    className=" btn-icon-clipboard "
                    id="tooltip982655500"
                    type="button"
                    style={{ background: "blue", float:'right',border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    onClick={()=>this.removeplaform(index)}
                  >
                    <div>
                     
                      <span style={{ color: "white", fontWeight: 'bold' }}>  Remove</span>
                    </div>
                  </button></Col>
                         </Row>
                         <div>
<br/>
{    this.state.filter==='City'?
    <div>
        <Row>
            <Col xl='2'>
            <span>City</span> 
            </Col>
            <Col xl='3'>
            <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
      <Option value="is">Is</Option>
      <Option value="isnot">Is not</Option>
      {/* <Option value="Contain">Contain</Option>
      <Option value="notcontain"> Not Contain</Option> */}
      </Select> 
            </Col>
            <Col xl='4'>
            <Input placeholder="Enter City" type="text" name='title' style={{ width: 200 }} onChange={(e) => this.setState({ city: e.target.value })} />
  
            </Col>
            <Col xl='3'>
            <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        onClick={this.addcity}
                      >
                        <div>
                          {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                          
                          <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                        </div>
                      </button>
            </Col>
        </Row>

        </div> 
   :
   this.state.filter==='Country'?
   <div>
       <Row>
           <Col xl='2'>
           <span>Country</span> 
           </Col>
           <Col xl='3'>
           <Select defaultValue="is" style={{ width: 120 }} onChange={this.isnot} >
     <Option value="is">Is</Option>
     <Option value="isnot">Is not</Option>
     {/* <Option value="Contain">Contain</Option>
     <Option value="notcontain"> Not Contain</Option> */}
     </Select> 
           </Col>
           <Col xl='4'>
           <Select defaultValue="" style={{ width: '100%' }} onChange={this.country}>
               {
               countries.map((item)=>{
                   return(
       
                    <Option value={item.name}>{item.name}</Option>
         
              
                   )
               })

                
    }
                </Select>
           </Col>
           <Col xl='3'>
           <button
                       className=" btn-icon-clipboard "
                       id="tooltip982655500"
                       type="button"
                       style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                       onClick={this.addcountry}
                     >
                       <div>
                         {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                         
                         <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                       </div>
                     </button>
           </Col>
       </Row>

       </div> 
  
   :
        this.state.filter==='Platform'?
        <div>
            <Row>
                <Col xl='2'>
                <span>Platform</span> 
                </Col>
                <Col xl='3'>
                <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
          <Option value="is">Is</Option>
          <Option value="isnot">Is not</Option>

          </Select> 
                </Col>
                <Col xl='4'>
                <Select defaultValue="Mobile" style={{ width: '100%' }} onChange={this.platform}>
      <Option value="Mobile">Mobile</Option>
      <Option value="Tablet">Tablet</Option>
      <Option value="Desktop">Desktop</Option>
      <Option value="Other"> Other</Option>
      </Select>
                </Col>
                <Col xl='3'>
                <button
                            className=" btn-icon-clipboard "
                            id="tooltip982655500"
                            type="button"
                            style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                            onClick={this.addprogram}
                          >
                            <div>
                              {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                              
                              <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                            </div>
                          </button>
                </Col>
            </Row>
   </div>    
:
this.state.filter==='Browser'?
<div>
    <Row>
        <Col xl='2'>
        <span>Browser</span> 
        </Col>
        <Col xl='3'>
        <Select defaultValue="Is" style={{ width: 120 }} onChange={this.isnot} >
  <Option value="is">Is</Option>
  <Option value="isnot">Is not</Option>

  </Select> 
        </Col>
        <Col xl='4'>
        <Select defaultValue="Safari" style={{ width: '100%' }} onChange={this.browser} >
<Option value="Safari">Safari</Option>
<Option value="Chrome">Chrome</Option>
<Option value="Firefox">Firefox</Option>
<Option value="Other"> Other</Option>
</Select>
        </Col>
        <Col xl='3'>
        <button
                    className=" btn-icon-clipboard "
                    id="tooltip982655500"
                    type="button"
                    style={{ background: "blue", border: 1,padding:'8px 8px',marginTop:'-3px', color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    onClick={this.addbrowser}
                  >
                    <div>
                      {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                      
                      <span style={{ color: "white", fontWeight: 'bold' }}>  Add</span>
                    </div>
                  </button>
        </Col>
    </Row>
</div>    
:
<div></div>}
</div>
                       </div>     
                   );}
 )}
</div>
<div></div>
</div>
:
 <div></div>}


  
 </CardBody>
 </Card>
        )
    }
}