export const bezierEase = [0.645, 0.045, 0.355, 1];

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: .5,
      delay: .3,
      ease: bezierEase,
      staggerChildren: 0.05
    }
  }
};

export const exit = {
  opacity: 0,
  transition: {
    duration: .5,
    delay: .3,
    ease: bezierEase,
    staggerChildren: 0.05
  }
};
