module.exports = {
  theme: {
    screens: {
      sm: '870px',
      md: '1140px',
      lg: '1600px'
    },
    extend: {
      width: {
        448: '28rem',
        160: '40rem',
        96: '21rem'
      },
      inset: {
        '-64': '-8rem',
        '-24': '-6rem'
      },
      boxShadow: {
        card: '0px 4px 32px rgba(0, 0, 0, 0.32)'
      },
      backgroundColor: {
        'acm-blue': '#0085b9;'
      },
      textColor: {
        'acm-blue': '#0085b9;'
      },
      spacing: { 98: '24.5rem' }
    }
  },
  variants: { display: ['responsive', 'hover', 'focus'] },
  plugins: []
};
