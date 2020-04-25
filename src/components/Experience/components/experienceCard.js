import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer } from '../experienceStyles';
import { CardImageAndName } from '../../../common';
import PositionDetails from './positionDetails';

const ExperienceCard = (props) => {
  const { experience } = props;

  return (
    <CardContainer>
      <Container fluid>
        <Row>
          <Col lg={3} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <CardImageAndName imageUrl={experience.company_image_url} name={experience.company} />
          </Col>
          <Col lg={9} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <PositionDetails experience={experience} />
          </Col>
        </Row>
      </Container>
    </CardContainer>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape().isRequired,
};

export default ExperienceCard;
