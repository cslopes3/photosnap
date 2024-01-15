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
                    src={close}
                    alt={''}
                    width={16}
                    height={16}
                    onClick={handleMenu}
                />
            ) : (
                <Image
                    src={iconHamburger}
                    alt={''}
                    width={16}
                    height={16}
                    onClick={handleMenu}
                />
            )}
        </>
    );
}
