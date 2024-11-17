// animations.js
import { LINE_THICKNESS } from '@/app/lineConstants';

export const lineVariants = {
  hidden: (custom) => ({
    width: custom.mode === 'vertical' ? LINE_THICKNESS : 'auto',
    height: custom.mode === 'horizontal' ? LINE_THICKNESS : 'auto',
  }),
  visible: (custom) => ({
    width: custom.mode === 'vertical' ? LINE_THICKNESS : custom.width,
    height: custom.mode === 'horizontal' ? LINE_THICKNESS : custom.height,
    transition: {
      delay: custom.delay,
      duration: 1,
    },
  }),
};
