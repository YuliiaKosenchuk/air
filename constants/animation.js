const duration = 0.7;
const ease = [0.22, 1, 0.36, 1];

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, ease },
};

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, ease },
};

export const FADE_IN_VIEW = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration, ease }
};

//Fade in with customizable delay for staggered effects
export const getFadeInView = (delay = 0) => ({
  ...FADE_IN_VIEW,
  transition: { ...FADE_IN_VIEW.transition, delay }
});

export const CARD_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const CARD_ITEM = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const NAV_UNDERLINE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  },
};

export const LIFT_ON_HOVER = {
  whileHover: { y: -12 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const MOBILE_ASIDE = {
  initial: { x: "-100%" },
  animate: { 
    x: 0,
    transition: { type: "tween", duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    x: "-100%",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
};

export const BUTTON_ANIMATION = {
  whileHover: { scale: 1.02, backgroundColor: "#306ef7" },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};