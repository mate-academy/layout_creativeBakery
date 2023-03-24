'use strict';
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1200px',
      'desktop-xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      'dark-orange': '#B2341A',
      'accent-orange': '#F9512E',
      'light-orange': '#FBA28F',
      'light-pink': '#FFEEFC',
      'light-blue': '#EEF7FF',
      black: '#1C1A26',
      grey: '#7F8096',
      white: '#FFFFFF',
    },

    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },

    fontSize: {
      s: [
        '16px',
        {
          lineHeight: '150%',
          letterSpacing: '-0.01em',
        },
      ],
      's-bolder': [
        '16px',
        {
          lineHeight: '100%',
          letterSpacing: '0.02em',
          fontWeight: '500',
        },
      ],
      m: [
        '48px',
        {
          lineHeight: '85%',
          letterSpacing: '-0.05em',
        },
      ],
      l: [
        '56px',
        {
          lineHeight: '85%',
          letterSpacing: '-0.05em',
        },
      ],
      xl: [
        '64px',
        {
          lineHeight: '85%',
          letterSpacing: '-0.05em',
        },
      ],
      '2xl': [
        '72px',
        {
          lineHeight: '85%',
          letterSpacing: '-0.05em',
        },
      ],
      '3xl': [
        '80px',
        {
          lineHeight: '85%',
          letterSpacing: '-0.05em',
        },
      ],
      '4xl': [
        '96px',
        {
          lineHeight: '85%',
          letterSpacing: '-0.05em',
        },
      ],
      '5xl': [
        '144px',
        {
          lineHeight: '85%',
          letterSpacing: '-0.05em',
        },
      ],
    },
    extend: {
      backgroundImage: {
        'cookie-icon': "url('/images/Crumbs.png')",
      },
      gridTemplateColumns: {
        mobile: 'repeat(2, 136px)',
        tablet: 'repeat(8, 64px)',
        desktop: 'repeat(8, 118px)',
        'desktop-xl': 'repeat(8, 128px)',
      },
    },
  },
  plugins: [],
};
