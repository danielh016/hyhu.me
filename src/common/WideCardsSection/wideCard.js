import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer } from './wideCardsSectionStyles';
import CardImageAndName from '../CardImageAndName';

const WideCard = (props) => {
  const { content, DetailsComponent } = props;

  return (
    <CardContainer>
      <Container fluid>
        <Row>
          <Col lg={3} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <CardImageAndName imageUrl={content.image_url} name={content.organization} />
          </Col>
          <Col lg={9} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <DetailsComponent content={content} />
          </Col>
        </Row>
      </Container>
    </CardContainer>
  );
};

WideCard.propTypes = {
  content: PropTypes.shape().isRequired,
  DetailsComponent: PropTypes.node.isRequired,
};

export default WideCard;
