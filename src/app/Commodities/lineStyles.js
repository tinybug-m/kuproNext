// lineStyles.js

import {
  LINE_THICKNESS,
  VERTICAL_SPACE,
  HORIZONTAL_SPACE,
  GAP_TO_SIDE_ELEMENT,
  GOING_OUT_TO_SIDE_ELEMENT,
} from '../lineConstants';

import {
  LINE_THICKNESS_TABLET,
  VERTICAL_SPACE_TABLET,
  HORIZONTAL_SPACE_TABLET,
  GAP_TO_SIDE_ELEMENT_TABLET,
  GOING_OUT_TO_SIDE_ELEMENT_TABLET,
} from '../lineConstants';

// Lines for Hero component (Desktop)
export const heroLines = [
  {
    custom: {
      height: '36px',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      bottom: `calc(100% + ${VERTICAL_SPACE} - 36px)`,
      left: '0',
      background: '#337EB7'
    },
    id: 'heroLine0',
  },
  {
    custom: {
      width: '100%',
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `-${VERTICAL_SPACE}`,
      left: '0',
      background: '#337EB7'
    },
    id: 'heroLine1',
  },
  {
    custom: {
      height: `calc(100% + ${VERTICAL_SPACE} * 2)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-${VERTICAL_SPACE}`,
      right: '0',
      background: '#337EB7'
    },
    id: 'heroLine2',
  },
  {
    custom: {
      width: `calc(100% + ${GOING_OUT_TO_SIDE_ELEMENT} + ${GAP_TO_SIDE_ELEMENT})`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-${VERTICAL_SPACE}`,
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
      top: `calc(100% + ${VERTICAL_SPACE})`,
      left: `calc(-${GAP_TO_SIDE_ELEMENT} + -${GOING_OUT_TO_SIDE_ELEMENT})`,
      background: 'linear-gradient(to bottom,#337EB7 1% , #23A978 15%)',
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

// Lines for Soft Commodities component (Desktop)
export const softCommoditiesLines = [
  {
    custom: {
      height: '100vh',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      top: `calc(-100vh - ${VERTICAL_SPACE})`,
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
      top: `-${VERTICAL_SPACE}`,
      right: `calc(${GOING_OUT_TO_SIDE_ELEMENT} - ${LINE_THICKNESS})`,
      background: '#337EB7'
    },
    id: 'softLine2',
  },
  {
    custom: {
      height: `calc(100% + ${VERTICAL_SPACE} * 2)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-${VERTICAL_SPACE}`,
      left: '0',
      background: '#337EB7'
    },
    id: 'softLine3',
  },
  {
    custom: {
      width: `calc(100% + ${GAP_TO_SIDE_ELEMENT} + ${GOING_OUT_TO_SIDE_ELEMENT})`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-${VERTICAL_SPACE}`,
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
      top: `calc(100% + ${VERTICAL_SPACE})`,
      right: `calc(-${GAP_TO_SIDE_ELEMENT} - ${GOING_OUT_TO_SIDE_ELEMENT})`,
      background: 'linear-gradient(to bottom,#337EB7 1% , #23A978 15%)',
    },
    id: 'softLine5',
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
// Lines for Base Metals component
export const baseMetalLines = [
  {
    custom: {
      height: '100vh',
      delay: 0,
      mode: 'vertical',
    },
    styles: {
      top: `calc(-100vh - ${VERTICAL_SPACE})`,
      left: `calc(${GOING_OUT_TO_SIDE_ELEMENT} - ${LINE_THICKNESS})`,
      background: '#337EB7'
    },
    id: 'baseMetalLine1',
  },
  {
    custom: {
      width: `calc(100% - ${GOING_OUT_TO_SIDE_ELEMENT})`,
      delay: 1,
      mode: 'horizontal',
    },
    styles: {
      top: `-${VERTICAL_SPACE}`,
      left: `calc(${GOING_OUT_TO_SIDE_ELEMENT} - ${LINE_THICKNESS})`,
      background: '#337EB7'
    },
    id: 'baseMetalLine2',
  },
  {
    custom: {
      height: `calc(100% + ${VERTICAL_SPACE} * 2)`,
      delay: 2,
      mode: 'vertical',
    },
    styles: {
      top: `-${VERTICAL_SPACE}`,
      right: '0',
      background: '#337EB7'
    },
    id: 'baseMetalLine3',
  },
  {
    custom: {
      width: `calc(100% + ${GAP_TO_SIDE_ELEMENT} + ${GAP_TO_SIDE_ELEMENT})`,
      delay: 3,
      mode: 'horizontal',
    },
    styles: {
      bottom: `-${VERTICAL_SPACE}`,
      right: '0',
      background: '#337EB7'
    },
    id: 'baseMetalLine4',
  },
  {
    custom: {
      height: '100vh',
      delay: 4,
      mode: 'vertical',
    },
    styles: {
      top: `calc(100% + ${VERTICAL_SPACE})`,
      left: `calc(-${GAP_TO_SIDE_ELEMENT} - ${GAP_TO_SIDE_ELEMENT})`,
      background: 'linear-gradient(to bottom,#337EB7 1% , #23A978 15%)',
    },
    id: 'baseMetalLine5',
  },
];
