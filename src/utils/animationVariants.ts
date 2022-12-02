import { Variants } from 'framer-motion'

export const animationVariants: Variants = {
    offScreenLeft: {
      x: -1000,
      visibility: 'hidden'
    },
    offScreenRight: {
      x: 1000,
      visibility: 'hidden'
    },
    onScreen: {
      x: 0,
      visibility: 'visible',
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }