module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        pool: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        purple: '#7f56D9',
        gray: '#475467',
      },
    },
  },
  plugins: [require('daisyui')],
}
