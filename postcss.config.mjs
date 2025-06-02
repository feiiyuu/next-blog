const config = {
  plugins: {
    '@unocss/postcss': {
      content: [
        '@/app/**/*.{html,js,ts,jsx,tsx}',
        '@/components/**/*.{html,js,ts,jsx,tsx}'
      ],
    },
  },
};

export default config;
