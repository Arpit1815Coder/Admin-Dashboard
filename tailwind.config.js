// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as needed
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'light', 
      'dark', 
       
      'retro', 
      {
        green: {
          primary: '#34d319',
          secondary: '#10b981',
          accent: '#4ade80',
          neutral: '#d1fae5',
          'base-100': '#f0fdf4',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
        grey: {
          primary: '#9ca3af',
          secondary: '#6b7280',
          accent: '#d1d5db',
          neutral: '#f3f4f6',
          'base-100': '#e5e7eb',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },

        teal: {
          primary: '#14b8a6',
          secondary: '#0d9488',
          accent: '#64d5ca',
          neutral: '#e6fffa',
          'base-100': '#f0fdfa',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
       
      },
      // Add other themes if needed
    ],
  },
  plugins: [require('daisyui')],
};
