import Image from 'next/image';
import Link from 'next/link';

import logo from '@public/assets/shared/desktop/logo.svg';

export function Logo() {
    return (
        <Link href="/">
            <Image src={logo} alt="" />
        </Link>
    );
}
