import React from 'react';
import { Media } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <Container>
          <Row>
          <Col>
          <Media>
          <Col ml="4" xl="6">
          <Media left href="https://github.com/Natanagar/neighbourhood-map">
          <i className="fab fa-facebook-square"></i>
          <Media object data-src=".../img/GitHub_Logo.png" alt="Github" />
          </Media>
          </Col>
          <Col ml="8" xl="6">
          <Media body>
          <Media heading>
          <div>Neibourhood Map</div>
          </Media>
          This is education project. Powered by Flickr and GoogleMaps API.
          </Media>
          </Col>
          </Media>
          </Col>
          </Row>
    </Container>
  );
};

/*Media.propTypes = {
    body: PropTypes.bool,
    bottom: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.bool,
    left: PropTypes.bool,
    list: PropTypes.bool,
    middle: PropTypes.bool,
    object: PropTypes.bool,
    right: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    top: PropTypes.bool,
  };*/

export default Footer;