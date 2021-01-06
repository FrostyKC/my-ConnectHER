import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegistrationOptions from '../../components/MembershipOptions/MembershipOptions';
import LoginForm from '../../components/LoginForm/LoginForm';
import function_list from '../../functions/list';
import styles_list from '../../styles/list';

// Argon Components
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import style_list from '../../styles/list';

class LandingPage extends Component {
  state = {
    activeTab: '1',
  };

  componentDidMount() {
    document.title = 'ConnectHER';
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <Container className="card-img-overlay background">
        <Row>
          <Col
            className="tabbing"
            lg={{ size: 6, offset: 6 }}
            md={{ size: 8, offset: 4 }}
          >
            <Nav
              tabs
              style={{
                position: 'relative',
                top: '0px',
                zIndex: '5',
              }}
              className="form nav-fill flex-column flex-sm-row"
            >
              <NavItem>
                <NavLink
                  className={classnames('mb-sm-0 mb-md-0', {
                    active: this.state.activeTab === '1',
                  })}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames('mb-sm-0 mb-md-0', {
                    active: this.state.activeTab === '2',
                  })}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col
                className="tabbing"
                lg={{ size: 6, offset: 6 }}
                md={{ size: 8, offset: 4 }}
                sm={12}
                xs={12}
              >
                <Card>
                  <CardBody className="login">
                    <LoginForm />
                  </CardBody>
                </Card>
                <div className="copyright">
                  {' '}
                  <span
                    style={{
                      color: 'white',
                      fontSize: 13.5,
                      textAlign: 'center',
                      opacity: 0.5,
                    }}
                  >
                    {' '}
                    &copy; An InnovateHER KC Space | Built with {''}
                    <i className="fa fa-heartbeat" /> by Prime Digital Academy
                  </span>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col
                className="tabbing"
                lg={{ size: 6, offset: 6 }}
                md={{ size: 8, offset: 4 }}
                sm={12}
                xs={12}
              >
                <Card>
                  <CardBody className="login card">
                    <RegistrationOptions />
                  </CardBody>
                </Card>
                <div className="copyright">
                  {' '}
                  <span
                    style={{
                      color: 'white',
                      fontSize: 13.5,
                      textAlign: 'center',
                      opacity: 0.5,
                    }}
                  >
                    {' '}
                    &copy; An InnovateHER KC Space | Built with {''}
                    <i className="fa fa-heartbeat" /> by Prime Digital Academy
                  </span>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
