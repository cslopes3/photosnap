'use client';

import { ReactNode } from 'react';

import { useSmallDevicesMenu } from 'contexts/small-devices-menu-context';

export function SmallDevicesMenu({ children }: { children: ReactNode }) {
    const { showMenu, controledEnabledMenu } = useSmallDevicesMenu();

    function handleMenu() {
        controledEnabledMenu();
    }

    return (
        <>
            {showMenu && (
                <>
                    <div className="w-full absolute bg-primary py-8 md:hidden">
                        <nav className="text-primary">
                            <ul className="flex flex-col gap-5 text-h2-mobile uppercase text-center">
                                {children}
                            </ul>
                        </nav>
                        <hr className="mx-auto w-[16.625rem] my-5 h-px bg-alt opacity-25" />
                        <button className="py-4 px-16 text-h2-mobile bg-alt text-alt uppercase block mx-auto">
                            Get an invite
                        </button>
                    </div>
                    <div
                        className="fixed inset-0 top-18 -z-10  w-full bg-black opacity-80"
                        onClick={handleMenu}
                    ></div>
                </>
            )}
        </>
    );
}
