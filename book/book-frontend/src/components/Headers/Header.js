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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axiosInstance from '../../Apis/axiosapi'
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      impression:{},
      subscriber:{},
      revenue:{},
      campaign:{}
    }
  }
  async componentDidMount(){
    const credentials = {email:"hamzaiftikharpcs@gmail.com", password:"ham31298"};
    await axiosInstance.login(credentials).then(res => {
        if(res.status === 200){
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            localStorage.setItem('first',JSON.stringify(res.data.user.first_name))
            localStorage.setItem('last',JSON.stringify(res.data.user.last_name))
            localStorage.setItem('key',JSON.stringify(res.data.key))
            console.log("Login Credentials :",res.data);
            console.log('key',localStorage.getItem('key'))
        
        }
        else  {
         
            console.log('Username or Password is incorrect, try again!');
        }
    });
    setTimeout(async() => {  await axiosInstance.get_active_subscriber_stats().then(res => {
      if(res.status === 200){
    
          console.log("Subscriber :",res.data);
          this.setState({subscriber:res.data})
      }
      else  {
       
          console.log('Incorrect Values, try again!');
      }
  }); }, 15000);
 
   
  await axiosInstance.get_campaigns_stats().then(res => {
    if(res.status === 200){
  
        console.log("Campaign :",res.data);
        this.setState({campaign:res.data})
    }
    else  {
     
        console.log('Incorrect Values, try again!');
    }
});
await axiosInstance.get_impression_stats().then(res => {
  if(res.status === 200){

      console.log("Impression :",res.data);
      this.setState({impression:res.data})
  }
  else  {
   
      console.log('Incorrect Values, try again!');
  }
});
await axiosInstance.get_revenue_stats().then(res => {
  if(res.status === 200){

      console.log("Revenue :",res.data);
      this.setState({revenue:res.data})
  }
  else  {
   
      console.log('Incorrect Values, try again!');
  }
});
  }
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8" >
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Subscribers
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                           Revenue
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            2,356 PHP
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-down" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last week</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Impressions
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">924</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" /> 1.10%
                        </span>{" "}
                        <span className="text-nowrap">Since yesterday</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                           Campaign Sent
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            4965
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" /> 12%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
