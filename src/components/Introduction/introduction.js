import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { IntroContainer } from './introductionStyles';
import { Sidebar, IntroDetail } from './components';

import websiteContent from '../../websiteContent.json';
import ProfileImage from './utils/headicon.png';

const Introduction = () => {
  const { name, subtitles, about } = websiteContent.data.introduction;
  const websiteContentValues = Object.values(websiteContent.data);
  const sections = websiteContentValues.filter((value) =>
    Object.keys(value).includes('sectionTitle')
  );
  const subtitleString = subtitles.join(' / ');

  return (
    <IntroContainer>
      <Row style={{ margin: 0 }}>
        <Col md={6} xs={12}>
          <Sidebar sections={sections} />
        </Col>
        <Col md={6} xs={12}>
          <IntroDetail
            name={name}
            subtitleString={subtitleString}
            about={about}
            profileImage={ProfileImage}
          />
        </Col>
      </Row>
    </IntroContainer>
  );
};

export default Introduction;
