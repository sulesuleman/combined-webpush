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
import { Link } from "react-router-dom";
import { Progress } from 'antd';
import axiosInstance from '../../Apis/axiosapi'
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
class AdminNavbar extends React.Component {
  async handleLogout() {
    try {
        const response= await axiosInstance.logOut()
          console.log(response);
          if(response.status === 200){
            window.location = `/admin/index`;
          }
        }
    catch (e) {
        console.log(e);
    }
  };
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-black text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>
           
                        
                         
                     
                     
            <Nav className="align-items-center d-none d-md-flex" navbar>
            <div>
                            <i className=" ni ni-notification-70" />
                           
                          </div>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold" style={{color:'black'}}>
                        Hamza
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
             
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h5 className="text-overflow m-0">Hamza</h5>
                    <h5 className="text-overflow m-0">Basic</h5>
                    <h5 className="text-overflow m-0">Impression (7/900 used)!</h5>
                    <Progress percent={30}  size="small" />

                    <h5 className="text-overflow m-0">Impressions resets at Jan 1,2021,6 am</h5>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>Setting</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Plan and Pricing</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Documentation</span>
                  </DropdownItem>
                  <DropdownItem to="#" tag={Link} onClick={this.logout}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
