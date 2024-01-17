import Link from 'next/link';

import { Arrow } from './arrow';

export function Beta() {
    return (
        <section>
            <article className="grid gap-6 py-16 px-8 bg-cover bg-center text-alt bg-[url('/assets/shared/mobile/bg-beta.jpg')] sm:grid-cols-2-1 sm:items-center sm:px-10 sm:bg-[url('/assets/shared/tablet/bg-beta.jpg')] lg:px-40 lg:bg-[url('/assets/shared/desktop/bg-beta.jpg')]">
                <h2 className="text-h1-mobile uppercase max-w-md sm:text-h1">
                    We’re in beta. Get your invite today!
                </h2>
                <Link
                    className="flex gap-4 sm:justify-self-end transition-all hover:underline"
                    href={''}
                >
                    <h4 className="text-h4 uppercase">Get an invite</h4>
                    <Arrow />
                </Link>
            </article>
        </section>
    );
}
