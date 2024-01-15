'use client';

import { ReactNode } from 'react';

import { SmallDeviceProvider } from 'contexts/small-devices-menu-context';

export function Providers({ children }: { children: ReactNode }) {
    return <SmallDeviceProvider>{children}</SmallDeviceProvider>;
}
