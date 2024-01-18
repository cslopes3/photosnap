'use client';

import Link from 'next/link';

import { useSmallDevicesMenu } from 'contexts/small-devices-menu-context';

export function SmallDevicesMenuLinks() {
    const { controledEnabledMenu } = useSmallDevicesMenu();

    const handleClick = () => {
        controledEnabledMenu();
    };

    return (
        <>
            <li className="transition-all hover:opacity-30">
                <Link href={'/stories'} onClick={handleClick}>
                    Stories
                </Link>
            </li>
            <li className="transition-all hover:opacity-30">
                <Link href={'/features'} onClick={handleClick}>
                    Features
                </Link>
            </li>
            <li className="transition-all hover:opacity-30">
                <Link href={'/pricing'} onClick={handleClick}>
                    Pricing
                </Link>
            </li>
        </>
    );
}
