import { style, globalStyle, keyframes } from '@vanilla-extract/css';

// Reset and base styles
globalStyle('*, *::after, *::before', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily:
    "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('html', {
  scrollBehavior: 'smooth',
  scrollbarWidth: 'thin',
});

export const body = style({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  placeContent: 'center',
  backgroundImage: 'linear-gradient(to bottom, var(--clr), var(--clr2))',
  overflow: 'hidden',
});

// View transition rule — Note: Vanilla Extract does not support @view-transition yet.
// You can put this in global CSS or via a side CSS file if needed
globalStyle('@view-transition', {
  navigation: 'auto',
});

const fadeIn = keyframes({
  '0%': {
    scale: 0,
    transform: 'rotate(-360deg)',
  },
  '100%': {
    scale: 1,
    transform: 'rotate(360deg)',
  },
});

export const section = style({
  backgroundImage: 'var(--bg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  inset: 0,
  display: 'flex',
  // The view-transition-name is CSS property, set as var or fallback:
  vars: {
    'view-transition-name': 'section',
  },
  selectors: {
    // Pseudo elements styles can't be defined directly with Vanilla Extract,
    // so we use globalStyle below for ::before and ::after on section
  },
});

globalStyle('section::before, section::after', {
  content: "''",
  display: 'block',
  width: '5vmax',
  height: '5vmax',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  backgroundImage: "url('assets/arrow.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundBlendMode: 'multiply',
});

globalStyle('section::before', {
  left: '2vmax',
  transform: 'translateY(-50%) scaleX(-1)',
});

globalStyle('section::after', {
  right: '2vmax',
});

export const link = style({
  width: '50%',
  height: '100%',
  display: 'block',
  backgroundColor: 'transparent',
});

// View transition animations (these are experimental and might require global CSS)
globalStyle('::view-transition-new(section)', {
  animation: `${fadeIn} 1s ease forwards`,
});

globalStyle('::view-transition-old(section)', {
  animation: `${fadeIn} 1s ease reverse forwards`,
});
