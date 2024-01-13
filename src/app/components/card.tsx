import Link from 'next/link';

import { Arrow } from './arrow';

type ImagesUrl = {
    mobile: string;
    tablet: string;
    desktop: string;
};

const themeOptions = {
    dark: 'dark',
    light: 'light',
} as const;

export type themeType = keyof typeof themeOptions;

type CardProps = {
    imagesUrl: ImagesUrl;
    title: string;
    bodyText: string;
    linkText: string;
    theme: themeType;
};

export function Card({
    imagesUrl,
    title,
    bodyText,
    linkText,
    theme,
}: CardProps) {
    const themeClasses =
        theme === 'light' ? 'bg-primary text-primary' : 'bg-alt text-alt';

    return (
        <article className="grid">
            <picture>
                <source media="(min-width:1024px)" srcSet={imagesUrl.desktop} />
                <source media="(min-width:768px)" srcSet={imagesUrl.tablet} />
                <img className="w-full" src={imagesUrl.mobile} alt="" />
            </picture>

            <div className={`py-18 px-8 ${themeClasses}`}>
                <h2 className="text-h1-mobile uppercase">{title}</h2>
                <p className="text-body opacity-60 mt-4 mb-6">{bodyText}</p>
                <Link className="flex gap-5 text-h4 uppercase" href={''}>
                    <h4>{linkText}</h4>
                    <Arrow />
                </Link>
            </div>
        </article>
    );
}
