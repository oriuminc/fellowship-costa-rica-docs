import React from 'react';
import Header from './Header';
import FeatureCard from './CardFeatured';
import Card from './Card';

function App() {
  return (
    <div className="App bg">
      <Header />
      <div className="wrap">
        <FeatureCard />
        <div className="flex cardWrap jus-between wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
