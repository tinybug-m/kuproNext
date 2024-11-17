"use client";

import useScrollHandler from '@/utils/useScrollHandler';
import { contents } from './content'; // Import content
import SingleComponent from './SingleComponent';
import { useEffect, useState } from 'react';
import { heroLines, heroLinesTablet, softCommoditiesLines, softCommoditiesLinesTablet, baseMetalLines } from './lineStyles';
import { useMediaQuery } from 'react-responsive';
import { useMenuColor } from '@/context/MenuContext';

export default function Commodities() {
  // checkIsThisClean - name and too many
  const [currentIndex, setCurrentIndex] = useState(0);

  const { setMenuIsDark } = useMenuColor(); // Access the context setter

  // Change the menu color based on the current component
  // checkIsThisClean
  useEffect(() => {
    if (currentIndex === 0) { // Hero is showing
      setMenuIsDark(false);
      console.log('we are not in the home gish gish dish dirish')
    }
  }, [currentIndex, setMenuIsDark]);

  // checkIsThisClean - changeComponent needs to be clean
  const changeComponent = (direction) => {
    setCurrentIndex(prevIndex => {
      const nextIndex = direction === 'next'
        ? Math.min(prevIndex + 1, 2) // Update to total number of components - 1
        : Math.max(prevIndex - 1, 0);
      return nextIndex;
    });
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 300);
  };

  useScrollHandler(changeComponent);



  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 768px)" });

  // checkIsThisClean - Solved in commodoties
  const components = [
    <SingleComponent content={contents.hero} lines={isTabletOrSmaller ? heroLinesTablet : heroLines} />,
    <SingleComponent content={contents.softCommodities} lines={isTabletOrSmaller ? softCommoditiesLinesTablet : softCommoditiesLines} />,
    <SingleComponent content={contents.baseMetals} lines={baseMetalLines} />
  ];

  return (
    <div className='flex items-center' style={{ minHeight:'100vh', overflow: 'hidden' }}>
      <div className={`container mx-auto h-full pt-16 ${currentIndex > 0 && 'content-center'}`} style={{ transition: 'opacity 0.8s ease-in-out' }}>
        {components[currentIndex]}
      </div>
    </div>
  );
}
