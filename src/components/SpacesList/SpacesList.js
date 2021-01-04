import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalBody } from 'reactstrap';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

//import BootstrapTable from 'react-bootstrap-table-next';
//import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter'; //Want to add filtering

class SpacesList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
  };

  componentDidMount() {
    document.title = 'Find a Space';
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  cellToggle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  /*-----> CASTOR <-----*/
  toggleFavorite = () => {
    if (!this.state.isFavorite) {
      this.setState({
        ...this.state,
        isFavorite: true,
      });
    } else {
      this.setState({
        ...this.state,
        isFavorite: false,
      });
    }
  };

  /*-----> CASTOR <-----*/

  render() {
    let image;

    let favoriteIconColor = function_list.favoriteIconHandler(
      this.state.isFavorite
    );

    if (
      this.props.space.fields !== undefined &&
      this.props.space.fields.Pictures !== undefined
    ) {
      image = this.props.space.fields.Pictures[0].url;
    }
    return (
      <>
        <Card
          style={style_list.card}
          className="bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody style={style_list.card_body}>
            <Row>
              <Col lg={{ size: 12, order: 1 }}>
                <div style={style_list.card_gradientFade}>
                  <div style={style_list.card_heart}>
                    <i
                      className="fa fa-heart m-1 fa-heart-custom"
                      style={{
                        color: favoriteIconColor,
                      }}
                      onClick={this.toggleFavorite}
                    />
                  </div>
                </div>
                <div
                  onClick={() => this.toggleModal('defaultModal')}
                  style={style_list.card_detailsImageContainer}
                >
                  {this.props.space.fields &&
                    this.props.space.fields.Pictures &&
                    this.props.space.fields.Pictures[0] &&
                    function_list.detailsCardImage(image).cardTag}
                </div>
                <div style={style_list.card_detailsTitle}>
                  {this.props.space.fields['Space Name']}
                </div>

                <p style={style_list.card_detailsP1}>
                  Capacity: {this.props.space.fields.Capacity}
                </p>
                <p style={style_list.card_detailsP2}>
                  Womxn Owned?: {this.props.space.fields['Womxn Owned?']}
                </p>

                <hr
                  style={{
                    marginTop: '-5px',
                  }}
                />
                <Button
                  block
                  outline
                  color="primary"
                  size="sm"
                  onClick={() => this.toggleModal('defaultModal')}
                  style={style_list.card_learnMoreButton}
                >
                  Learn More
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Modal
          className="modal-dialog-centered modal-primary"
          size="lg"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <button
            aria-label="Close"
            className="close m-2 "
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('defaultModal')}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <ModalBody>
            <Row>
              <Col lg={1}></Col>
              <Col lg={5}>
                <div style={style_list.modal_imageContainerBox}>
                  {this.props.space.fields &&
                    this.props.space.fields.Pictures &&
                    this.props.space.fields.Pictures[0] &&
                    function_list.detailsCardImage(image).modalTag}
                </div>
                <div className="mt-4 display-4">
                  {' '}
                  {this.props.space.fields['Space Name']}
                </div>
                <p>Capacity: {this.props.space.fields.Capacity}</p>
                <p>Womxn Owned?: {this.props.space.fields['Womxn Owned?']}</p>
              </Col>
              <Col lg={6} className="text-left p-5">
                <ul style={{ listStyleType: 'none' }}>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-email-83 mr-2"
                    />
                    {this.props.space.fields['Contact Email']}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-mobile-button mr-2"
                    />
                    {this.props.space.fields['Phone Number']}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-laptop mr-2"
                    />
                    {this.props.space.fields.Website}
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                <p className="font-weight-light mt-2">
                  Amenities: {this.props.space.fields.Amenities}
                </p>
              </Col>
            </Row>
            <hr />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(SpacesList);
