import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer } from '../educationStyles';
import { CardImageAndName } from '../../../common';
import DegreeDetails from './degreeDetails';

const EducationCard = (props) => {
  const { education } = props;

  return (
    <CardContainer>
      <Container fluid>
        <Row>
          <Col lg={3} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <CardImageAndName imageUrl={education.school_image_url} name={education.school} />
          </Col>
          <Col lg={9} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <DegreeDetails education={education} />
          </Col>
        </Row>
      </Container>
    </CardContainer>
  );
};

EducationCard.propTypes = {
  education: PropTypes.shape().isRequired,
};

export default EducationCard;
