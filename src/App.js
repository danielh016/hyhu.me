import React from 'react';
import { Container } from 'react-bootstrap';
import { Articles, Awards, Education, Experience, Introduction, Navbar } from './components';

function App() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Navbar />
      <Introduction />
      <Experience />
      <Articles />
      <Awards />
      <Education />
    </Container>
  );
}

export default App;
