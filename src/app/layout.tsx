import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import './globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

import { Providers } from 'providers/providers';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Photosnap',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Providers>
                <body className={`${dmSans.className} bg-primary`}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </Providers>
        </html>
    );
}
