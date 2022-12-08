import { Variants } from 'framer-motion'

export const animationVariants: Variants = {
    offScreenLeft: {
      x: -100    ,
      visibility: 'hidden'
    },
    offScreenRight: {
      x: 100,
      visibility: 'hidden'
    },
    onScreen: {
      x: 0,
      visibility: 'visible',
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: 0.6,
      }
    }
  }

