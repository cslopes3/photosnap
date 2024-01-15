import Link from 'next/link';

export function MenuLinks() {
    return (
        <>
            <li className="transition-all hover:opacity-30">
                <Link href={'/'}>Stories</Link>
            </li>
            <li className="transition-all hover:opacity-30">
                <Link href={'/'}>Features</Link>
            </li>
            <li className="transition-all hover:opacity-30">
                <Link href={'/'}>Pricing</Link>
            </li>
        </>
    );
}
