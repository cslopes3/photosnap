import Link from 'next/link';

import { Arrow } from './arrow';
import { Logo } from './logo';
import { MenuLinks } from './menu-links';
import { SocialMediaLinks } from './social-media-links';

export function Footer() {
    return (
        <footer className="bg-alt text-alt grid justify-center gap-8 py-14 max-w-screen-2xl mx-auto sm:grid-cols-2 sm:grid-rows-2 sm:py-16 sm:px-10 lg:gap-0">
            <div className="row-span-2 grid gap-8 sm:gap-0 lg:grid-cols-2">
                <div className="flex justify-center sm:order-1 sm:justify-start">
                    <Logo theme="dark" />
                </div>
                <div className="flex gap-3 justify-center sm:order-3 sm:justify-start sm:gap-6 lg:items-end">
                    <SocialMediaLinks />
                </div>
                <ul className="flex flex-col gap-5 items-center text-h4 uppercase mt-4 mb-20 sm:order-2 sm:flex-row sm:mt-8 lg:flex-col lg:my-0 lg:row-span-2">
                    <li className="transition-all hover:opacity-30">
                        <Link href={'/'}>Home</Link>
                    </li>
                    <MenuLinks />
                </ul>
            </div>

            <Link
                className="flex justify-center gap-5 sm:justify-self-end"
                href={''}
            >
                <h4 className="text-h4 uppercase">Get an invite</h4>
                <Arrow />
            </Link>

            <p className="text-body opacity-50 justify-self-end self-end">
                Copyright 2024. All Rights Reserved
            </p>
        </footer>
    );
}
