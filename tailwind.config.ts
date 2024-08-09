import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Arial',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        blue: '#3667E9',
        red: '#C34648',
        gray: '#E7E9EF',
        bg: '#F2F8FF',
        textPrimary: '#171731',
        textSecondary: '#65657B',
        textBrand: '#13126C',
      },
    },
  },
  plugins: [],
};
export default config;
