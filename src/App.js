import React from 'react';
import websiteContent from './websiteContent.json';
import Navbar from './Navbar';

function App() {
  const { name } = websiteContent.data.introduction;
  const websiteContentValues = Object.values(websiteContent.data);
  const sectionsList = websiteContentValues.filter((value) =>
    Object.keys(value).includes('sectionTitle')
  );

  return (
    <>
      <Navbar name={name} sections={sectionsList} />
    </>
  );
}

export default App;
