import Link from 'next/link';

export function MenuLinks() {
    return (
        <>
            <li className="transition-all hover:opacity-30">
                <Link href={'/stories'}>Stories</Link>
            </li>
            <li className="transition-all hover:opacity-30">
                <Link href={'/features'}>Features</Link>
            </li>
            <li className="transition-all hover:opacity-30">
                <Link href={'/pricing'}>Pricing</Link>
            </li>
        </>
    );
}
