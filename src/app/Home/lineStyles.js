// lineStyles.js

import {
  LINE_THICKNESS,
  VERTICAL_SPACE,
  HORIZONTAL_SPACE,
  GAP_TO_SIDE_ELEMENT,
  GOING_OUT_TO_SIDE_ELEMENT,
} from '@/app/lineConstants';

import {
  LINE_THICKNESS_TABLET,
  VERTICAL_SPACE_TABLET,
  HORIZONTAL_SPACE_TABLET,
  GAP_TO_SIDE_ELEMENT_TABLET,
  GOING_OUT_TO_SIDE_ELEMENT_TABLET,
} from '@/app/lineConstants';

// Lines for Hero component (Desktop)
export const heroLines = [
  {
    custom: {
      height: '60px',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      bottom: `calc(100% + 50px)`,
      left: '160px',
      background: '#23A978'
    },
    id: 'heroLine0',
  },
  {
    custom: {
      width: 'calc(100% - 160px)',
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `-110px`,
      left: '160px',
      background: 'linear-gradient(to right,#23A978 5%, #337EB7 15%)',
    },
    id: 'heroLine1',
  },
  {
    custom: {
      height: `calc(100% + 220px)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-110px`,
      right: '0',
      background: '#337EB7'
    },
    id: 'heroLine2',
  },
  {
    custom: {
      width: `calc(100% - 160px)`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-110px`,
      right: '0',
      background: 'linear-gradient(to right,#23A978 5%, #337EB7 15%)',
    },
    id: 'heroLine3',
  },
  {
    custom: {
      height: '60px',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      bottom: `-110px`,
      left: `160px`,
      background: '#23A978',
      // background: 'linear-gradient(to bottom,red 1% , blue 10%)'
    },
    id: 'heroLine4',
  },
];
// Lines for Hero component (Tablet)
export const heroLinesTablet = [
  {
    custom: {
      height: '24px',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      bottom: `calc(100% - ${VERTICAL_SPACE_TABLET} - 24px)`,
      left: '34px',
      background: '#337EB7'
    },
    id: 'heroLine0',
  },
  {
    custom: {
      width: 'calc(100% - 34px)',
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `${VERTICAL_SPACE_TABLET}`,
      left: '34px',
      background: '#337EB7'
    },
    id: 'heroLine1',
  },
  {
    custom: {
      height: `calc(100% + ${VERTICAL_SPACE_TABLET} )`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `${VERTICAL_SPACE_TABLET}`,
      right: '0',
      background: '#337EB7'
    },
    id: 'heroLine2',
  },
  {
    custom: {
      width: `112px`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `calc(-${VERTICAL_SPACE_TABLET} * 2)`,
      right: '0',
      background: '#337EB7'
    },
    id: 'heroLine3',
  },
  {
    custom: {
      height: '100vh',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      top: `calc(100% + ${VERTICAL_SPACE_TABLET} * 2)`,
      right: `calc(112px - ${LINE_THICKNESS})`,
      background: 'linear-gradient(to bottom,#337EB7 1% , #23A978 15%)',
      // background: 'linear-gradient(to bottom,red 1% , blue 10%)'
    },
    id: 'heroLine4',
  },
];



// Lines for Our Story component (Desktop)
export const ourStoryLines = [
  {
    custom: {
      height: '55px',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      bottom: `calc(100% + 55px)`,
      left: '-160px',
      background: '#23A978'
    },
    id: 'heroLine0',
  },
  {
    custom: {
      width: 'calc(100% + 160px)',
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `-110px`,
      left: '-160px',
      background: 'linear-gradient(to right,#23A978 5%, #337EB7 15%)',
    },
    id: 'heroLine1',
  },
  {
    custom: {
      height: `calc(100% + 220px)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-110px`,
      right: '0',
      background: '#337EB7'
    },
    id: 'heroLine2',
  },
  {
    custom: {
      width: `calc(100% - 33px)`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-110px`,
      right: '0',
      background: 'linear-gradient(to right,#23A978 5%, #337EB7 15%)',
    },
    id: 'heroLine3',
  },
  {
    custom: {
      height: '55px',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      bottom: `-110px`,
      left: `33px`,
      background: '#23A978',
    },
    id: 'heroLine4',
  },
];
// Lines for Soft Commodities component (Tablet)
export const softCommoditiesLinesTablet = [
  {
    custom: {
      height: '100vh',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      top: `calc(-100vh + 54px)`,
      right: `calc(${GOING_OUT_TO_SIDE_ELEMENT} - ${LINE_THICKNESS})`,
      background: '#337EB7'
    },
    id: 'softLine1',
  },
  {
    custom: {
      width: `calc(100% - ${GOING_OUT_TO_SIDE_ELEMENT})`,
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `54px`,
      right: `calc(${GOING_OUT_TO_SIDE_ELEMENT} - ${LINE_THICKNESS})`,
      background: '#337EB7'
    },
    id: 'softLine2',
  },
  {
    custom: {
      height: `calc(100% )`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `54px`,
      left: '0',
      background: '#337EB7'
    },
    id: 'softLine3',
  },
  {
    custom: {
      width: `120px`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-54px`,
      left: '0',
      background: '#337EB7'
    },
    id: 'softLine4',
  },
  {
    custom: {
      height: '100vh',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      top: `calc(100% + 54px)`,
      left: `calc(120px - 4px)`,
      background: 'linear-gradient(to bottom,#337EB7 1% , #23A978 15%)',
    },
    id: 'softLine5',
  },
];


// Lines for Our Value Add component (desktop)
export const ourValueLines = [
  {
    custom: {
      height: '40px',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      bottom: `calc(100% + 60px)`,
      left: '150px',
      background: '#23A978'
    },
    id: 'heroLine0',
  },
  {
    custom: {
      width: 'calc(100% - 150px)',
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `-100px`,
      left: '150px',
      background: 'linear-gradient(to right,#23A978 5%, #337EB7 15%)',
    },
    id: 'heroLine1',
  },
  {
    custom: {
      height: `calc(100% + 150px)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-100px`,
      right: '0',
      background: '#337EB7'
    },
    id: 'heroLine2',
  },
  {
    custom: {
      width: `calc(100% + 185px)`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-50px`,
      right: '0',
      background: 'linear-gradient(to right,#23A978 5%, #337EB7 15%)',
    },
    id: 'heroLine3',
  },
  {
    custom: {
      height: '40px',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      bottom: `-50px`,
      left: `-185px`,
      background: '#23A978',
    },
    id: 'heroLine4',
  },
];

// lines for Our Team component (desktop)
export const ourTeamLines = [
  {
    custom: {
      height: '40px',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      bottom: `calc(100% + 50px)`,
      right: `145px`,
      background: '#337EB7'
    },
    id: 'softLine1',
  },
  {
    custom: {
      width: `calc(100% - 145px)`,
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `-90px`,
      right: `145px`,
      background: '#337EB7'
    },
    id: 'softLine2',
  },
  {
    custom: {
      height: `calc(100% + 90px + 50px)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-90px`,
      left: '0',
      background: '#337EB7'
    },
    id: 'softLine3',
  },
  {
    custom: {
      width: `calc(100% + 190px)`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-50px`,
      left: '0',
      background: '#337EB7'
    },
    id: 'softLine4',
  },
  {
    custom: {
      height: '40px',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      bottom: `-50px`,
      right: `-190px`,
      background: 'linear-gradient(to bottom,#337EB7 1% , #23A978 15%)',
    },
    id: 'softLine5',
  },
];

// lines for Our Team component (desktop)
export const officeLocationsLines = [
  {
    custom: {
      height: '40px',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      bottom: `calc(100%)`,
      right: `50%`,
      background: '#337EB7'
    },
    id: 'softLine1',
  },
  {
    custom: {
      width: `50%`,
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `-40px`,
      right: `50%`,
      background: '#337EB7'
    },
    id: 'softLine2',
  },
  {
    custom: {
      height: `calc(100% + 40px + 40px)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-40px`,
      left: '0',
      background: '#337EB7'
    },
    id: 'softLine3',
  },
  {
    custom: {
      width: `100%`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-40px`,
      left: '0',
      background: '#337EB7'
    },
    id: 'softLine4',
  },
  {
    custom: {
      height: '40px',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      bottom: `-40px`,
      right: `0`,
      background: 'linear-gradient(to bottom,#337EB7 1% , #23A978 15%)',
    },
    id: 'softLine5',
  },
];