import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { IntroContainer } from './introductionStyles';
import { Sidebar, IntroDetail, WebsiteLinks } from './components';

import websiteContent from '../../websiteContent.json';
import ProfileImage from './utils/headicon.png';

const Introduction = () => {
  const { name, subtitles, about, contact, links } = websiteContent.data.introduction;
  const websiteContentValues = Object.values(websiteContent.data);
  const sections = websiteContentValues.filter((value) =>
    Object.keys(value).includes('sectionTitle')
  );
  const subtitleString = subtitles.join(' / ');

  return (
    <IntroContainer id="home">
      <Row style={{ margin: 0 }}>
        <Col lg={6} className="d-none d-lg-block">
          <Sidebar sections={sections} />
        </Col>
        <Col lg={6}>
          <IntroDetail
            name={name}
            subtitleString={subtitleString}
            contact={contact}
            about={about}
            profileImage={ProfileImage}
          />
        </Col>
      </Row>
      <Row style={{ margin: 0 }}>
        <Col>
          <WebsiteLinks links={links} />
        </Col>
      </Row>
    </IntroContainer>
  );
};

export default Introduction;
