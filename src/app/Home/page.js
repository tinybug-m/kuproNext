"use client"; // Make this a client component

import { useState, useEffect } from 'react';
import useScrollHandler from '@/utils/useScrollHandler';
import Hero from './Hero';
import OurStory from './OurStory';
import OurValueAdd from './OurValueAdd';
import OurTeam from './OurTeam';
import OfficeLocations from './OfficeLocations';
import Dot from '../../components/Dot';
import { useMenuColor } from '@/context/MenuContext';

export default function Home() {
  // checkIsThisClean - name
  const [currentIndex, setCurrentIndex] = useState(0);

  // checkIsThisClean - name
  const { setMenuIsDark } = useMenuColor(); // Context setter

  // checkIsThisClean - condination
  // Change the menu color based on the current component
  useEffect(() => {
    if (currentIndex === 0) { // Hero is showing
      setMenuIsDark(true);
      console.log('we are in the home gish gish dish dirish')
    } else { // Other components
      setMenuIsDark(false);
      console.log('we are not at the home gish gish dish dirish')
    }
  }, [currentIndex, setMenuIsDark]);

  // checkIsThisClean - too many
  const changeComponent = (direction) => {
    setCurrentIndex(prevIndex => {
      const nextIndex = direction === 'next'
        ? Math.min(prevIndex + 1, 4) // Total number of components - 1
        : Math.max(prevIndex - 1, 0);
      return nextIndex;
    });
  };

  useScrollHandler(changeComponent); // Assuming this manages your scroll


  // checkIsThisClean - I think its clean
  const components = [
    <Hero key="1" changeComponent={changeComponent}/>,
    <OurStory key="2" />,
    <OurValueAdd key="3" />,
    <OurTeam key="4" />,
    <OfficeLocations key="5" />
  ];

  // checkIsThisClean - We are modular wtf is this
  return (
    <div className="container mx-auto" style={{ height: '100vh', overflow: 'hidden' }}>
      <div className='flex gap-2.5' style={{ transition: 'opacity 0.8s ease-in-out' }}>
        <div className='grow'>
          {components[currentIndex]}
        </div>
        <div className='grid content-center w-4 min-w-4 gap-2 z-10'>
          {components.map((_, index) => (
            <Dot key={index} index={index} changeComponent={setCurrentIndex} isActive={index === currentIndex} />
          ))}
        </div>
      </div>
    </div>
  );
}
