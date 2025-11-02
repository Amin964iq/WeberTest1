/**
 * Background Configuration
 * Switch between different background themes for the website
 *
 * Current options:
 * - 'current': Original dark space background with stars and planets
 * - 'rebranding': New wavy gradient background with color palette (0F0108, FE1800, D7D8D8, E0AEAA)
 */

export const BACKGROUND_THEME = 'rebranding' as const; // Change to 'current' to revert

export type BackgroundTheme = 'current' | 'rebranding';

export const BACKGROUND_CONFIG = {
  current: {
    name: 'Original Dark Space',
    description: 'Dark space background with stars and orbiting planets',
    component: 'SpaceBackground',
  },
  rebranding: {
    name: 'Rebranding Wave',
    description: 'Smooth wavy gradient with color palette and distortion effects',
    component: 'SpaceBackgroundRebranding',
    colorPalette: {
      dark: '#0F0108',
      red: '#FE1800',
      light: '#D7D8D8',
      pink: '#E0AEAA',
    },
    animationSettings: {
      speed: '45%',
      distortion: '66%',
      swirl: '45%',
      grainMixer: '4%',
      grainOverlay: '14%',
    },
  },
} as const;
