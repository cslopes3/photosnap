'use client';

import Image from 'next/image';

import close from '@public/assets/shared/mobile/close.svg';
import iconHamburger from '@public/assets/shared/mobile/menu.svg';
import { useSmallDevicesMenu } from 'contexts/small-devices-menu-context';

export function HamburguerButtonMenu() {
    const { showMenu, controledEnabledMenu } = useSmallDevicesMenu();

    function handleMenu() {
        controledEnabledMenu();
    }

    return (
        <>
            {showMenu ? (
                <Image
                    className="w-4 h-auto"
                    src={close}
                    alt={''}
                    width={0}
                    height={0}
                    onClick={handleMenu}
                />
            ) : (
                <Image
                    className="w-4 h-auto"
                    src={iconHamburger}
                    alt={''}
                    width={0}
                    height={0}
                    onClick={handleMenu}
                />
            )}
        </>
    );
}
