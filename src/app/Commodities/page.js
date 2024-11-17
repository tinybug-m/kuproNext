"use client";

import useScrollHandler from '@/utils/useScrollHandler';
import { contents } from './content';
import SingleComponent from './SingleComponent';
import { useEffect, useState } from 'react';
import { heroLines, heroLinesTablet, softCommoditiesLines, softCommoditiesLinesTablet, baseMetalLines } from './lineStyles';
import { useMediaQuery } from 'react-responsive';
import { useMenuColor } from '@/context/MenuContext';

export default function Commodities() {
  // checkIsThisClean - Name bro name
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setMenuIsDark } = useMenuColor(); // Access context to set menu color
  // checkIsThisClean - Name bro name
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 768px)" });

  // Change the menu color based on the current component index
  // checkIsThisClean - maybe better condination
  useEffect(() => {
    if (currentIndex === 0) { // Hero is showing
      setMenuIsDark(false);
      console.log('we are not in the home gish gish dish dirish')
    }
  }, [currentIndex, setMenuIsDark]);


  // Function to change component index based on scroll direction
  // checkIsThisClean - too many aaaaaaaaaaaa
  const changeComponent = (direction) => {
    setCurrentIndex(prevIndex => {
      const nextIndex = direction === 'next'
        ? Math.min(prevIndex + 1, Object.keys(contents).length - 1) // Limit to last component
        : Math.max(prevIndex - 1, 0); // Limit to first component
      return nextIndex;
    });

    // Scroll to top of the page on component change
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  // Hook for handling scroll events
  useScrollHandler(changeComponent);

  // Define lines based on content type and screen size
  // checkIsThisClean
  const linesArray = [
    isTabletOrSmaller ? heroLinesTablet : heroLines,
    isTabletOrSmaller ? softCommoditiesLinesTablet : softCommoditiesLines,
    baseMetalLines
  ];

  // Convert contents object to an array for mapping
  const contentsArray = Object.values(contents);

  // Jooon its clean
  const components = contentsArray.map((content, index) => (
    <SingleComponent key={index} content={content} lines={linesArray[index]} />
  ));



  return (
    <div className="flex items-baseline" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <div
        className="container mx-auto pt-20"
        style={{ transition: 'opacity 0.8s ease-in-out' }}
      >
        {components[currentIndex]}
      </div>
    </div>
  );
}
