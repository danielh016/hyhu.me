import React from 'react';
import { Container } from 'react-bootstrap';
import { Introduction, Navbar } from './components';

function App() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Navbar />
      <Introduction />
    </Container>
  );
}

export default App;
