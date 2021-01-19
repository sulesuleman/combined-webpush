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

// reactstrap components
import {

  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import { Table, Tag, Space,Button ,Popconfirm, message} from 'antd';
import UserHeader from "components/Headers/UserHeader.js";
import CompaignsHeader from "components/Headers/Compaignsheader.js";
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
    dataIndex: 'Audience Reach',
    key: 'AudienceReach',
    render: (text, record) => (
      <Space size="middle">

        <Button  style={{backgroundColor:'darkgrey',color:'white'}}>Get Audience Reach  </Button>
      </Space>
    ),
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
class Segments extends React.Component {
  segment=()=>{
    window.location = `/admin/CreateSegment`;
  }
  render() {
    return (
      <>
        <CompaignsHeader />
        {/* Page content */}
        <br/>
        <Container className="mt--7" fluid>

                    <Button  style={{backgroundColor:'skyblue',color:'white'}} onClick={this.segment}>
                    Create Segment
                    </Button>

<br/>
<br/>
        <Table pagination={{ position: ['bottomRight'] ,pageSize:6}}   columns={columns} dataSource={data} />,       
        </Container>
      </>
    );
  }
}

export default Segments;
