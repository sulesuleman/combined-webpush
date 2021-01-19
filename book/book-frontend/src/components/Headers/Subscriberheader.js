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
import { Card, CardBody, CardTitle, CardHeader,Container, Row, Col ,Nav,NavItem,NavLink,Navbar} from "reactstrap";
import axiosInstance from '../../Apis/axiosapi'
class SubscriberHeader extends React.Component {
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
    await axiosInstance.get_active_subscriber_stats().then(res => {
      if(res.status === 200){
    
          console.log("Login Credentials :",res.data);
          this.setState({subscriber:res.data})
      }
      else  {
       
          console.log('Username or Password is incorrect, try again!');
      }
  });}
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8" >
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="12" xl="6">
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
                            2
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-up" /> 3.10%
                        </span>{" "}
                        <span className="text-nowrap">Since yesterday</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                       
                      
                   
                <Col lg="12" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                           Subscribers Gain (Last 7 days)
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">7</span>
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
               </Row>
               <Row>
           
           </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default SubscriberHeader;
