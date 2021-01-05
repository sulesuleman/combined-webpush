import React from "react";
// node.js library that concatenates classes (strings)

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

import SubscriberHeader from "components/Headers/Subscriberheader.js";
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts.js";

class Subscribers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };  
  
  render() {
    return (
      <>
        <SubscriberHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                     
                      <h2 className="text-white mb-0">Subscription Growth</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Week</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
        </Row>
          <Row>
            <Col xl="12">
            <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Subscribe List</h3>
                    </div>
                   
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Subscribe</th>
                      <th scope="col"> Subscriber Id</th>
                      <th scope="col">Web Browser</th>
                      <th scope="col"> City/Country</th>
                      <th scope="col"> Subscription Time</th>
           
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >John Higgins</td>
                      <td>109489585</td>
                      <td >Chrome</td>
                      <td>Reston, United states</td>
                      <td>7 Days ago</td>
                    </tr>
                    <tr>
                      <td >Mark Higgins</td>
                      <td>108955585</td>
                      <td >Chrome</td>
                      <td>Reston, United Kingdom</td>
                      <td>9 Days ago</td>
                    </tr>
                  
                  
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
                </Container>

      </>
    );
  }
}

export default Subscribers;
