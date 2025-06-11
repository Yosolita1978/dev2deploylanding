import React from 'react';
import LeftSide from '../components/leftside';
import RightSide from '../components/rightside';
import Footer from '../components/footer';

export default function Home() {

  return (
    <div className="h-screen flex overflow-hidden">
      <LeftSide />
      <RightSide />
    </div>
  );
  
}
