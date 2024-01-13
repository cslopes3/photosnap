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
            },
            backgroundImage: {
                'gradient-black':
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.27%, rgba(0, 0, 0, 0.66) 100%)',
                'main-accent':
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
                'h1-mobile': [
                    '2rem',
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
                subtitle: [
                    '0.8125rem',
                    {
                        letterSpacing: '0.125rem',
                    },
                ],
            },
            spacing: {
                '18': '4.5rem',
            },
            textColor: {
                primary: '#000000',
                alt: '#FFFFFF',
            },
            width: {
                'mobile-card': '84%',
                'default-card': '78%',
            },
        },
    },
    plugins: [],
};
export default config;
