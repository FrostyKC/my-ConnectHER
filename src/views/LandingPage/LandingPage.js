import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';

// Argon Components
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

// const [activeTab, setActiveTab] = useState('1');

//   const toggle = tab => {
//     if(activeTab !== tab) setActiveTab(tab);
//   }

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
                zIndex: '0',
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
                      color: '#EEEDEF',
                      fontSize: 12,
                      textAlign: 'center',
                    }}
                  >
                    {' '}
                    &copy; An
                  </span>{' '}
                  <span style={{ color: '#823bae', fontSize: 12.5 }}>
                    Innovate
                  </span>
                  <span style={{ color: '#F59032', fontSize: 12.5 }}>HER</span>{' '}
                  <span style={{ color: '#1BBFBF', fontSize: 12.5 }}>KC</span>
                  <span style={{ color: '#EEEDEF', fontSize: 12.5 }}>
                    {' '}
                    Space
                  </span>{' '}
                  <span style={{ color: '#EEEDEF', fontSize: 12.5 }}>
                    | Built with {''}
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
                  <CardBody className="login card"></CardBody>
                </Card>
                <div className="copyright">
                  {' '}
                  <span
                    style={{
                      color: '#EEEDEF',
                      fontSize: 12,
                      textAlign: 'center',
                    }}
                  >
                    {' '}
                    &copy; An
                  </span>{' '}
                  <span style={{ color: '#823bae', fontSize: 12.5 }}>
                    Innovate
                  </span>
                  <span style={{ color: '#F59032', fontSize: 12.5 }}>HER</span>{' '}
                  <span style={{ color: '#1BBFBF', fontSize: 12.5 }}>KC</span>
                  <span style={{ color: '#EEEDEF', fontSize: 12.5 }}>
                    {' '}
                    Space
                  </span>{' '}
                  <span style={{ color: '#EEEDEF', fontSize: 12.5 }}>
                    | Built with {''}
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
