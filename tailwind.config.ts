import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: '#FFFFFF',
                alt: '#000000',
                neutral: '#DFDFDF',
                gradient:
                    'linear-gradient(27deg, #FFC593 0.42%, #BC7198 43.46%, #5A77FF 83.33%)',
            },
            fontSize: {
                h1: [
                    '2.5rem',
                    {
                        lineHeight: '3rem',
                        letterSpacing: '0.2604rem',
                        fontWeight: '700',
                    },
                ],
                h2: [
                    '1.5rem',
                    {
                        lineHeight: '1.5625rem',
                        fontWeight: '700',
                    },
                ],
                h3: [
                    '1.125rem',
                    {
                        lineHeight: '1.5625rem',
                        fontWeight: '700',
                    },
                ],
                h4: [
                    '0.75rem',
                    {
                        letterSpacing: '0.125rem',
                        fontWeight: '700',
                    },
                ],
                body: [
                    '0.9375rem',
                    {
                        lineHeight: '1.5625rem',
                    },
                ],
            },
            textColor: {
                primary: '#000000',
                alt: '#FFFFFF',
            },
        },
    },
    plugins: [],
};
export default config;
