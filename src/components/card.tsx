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
    theme: themeType;
    imgOnRight: boolean;
    linkText?: string;
};

export function Card({
    imagesUrl,
    title,
    bodyText,
    linkText,
    theme,
    imgOnRight,
}: CardProps) {
    const themeClasses =
        theme === 'light' ? 'bg-primary text-primary' : 'bg-alt text-alt';

    return (
        <article
            className={`grid ${
                imgOnRight === true
                    ? 'sm:grid-cols-2-1 xl:grid-cols-2-3'
                    : 'sm:grid-cols-1-2 xl:grid-cols-3-2'
            }`}
        >
            <picture>
                <source media="(min-width:1280px)" srcSet={imagesUrl.desktop} />
                <source media="(min-width:640px)" srcSet={imagesUrl.tablet} />
                <img
                    className="w-full h-full object-cover"
                    src={imagesUrl.mobile}
                    alt=""
                />
            </picture>

            <div
                className={`flex flex-col justify-center py-18 ${themeClasses} ${
                    imgOnRight === true ? 'sm:order-first' : ''
                } sm:py-0`}
            >
                <div className="relative px-8 sm:px-14 xl:px-28">
                    {theme === 'dark' && (
                        <hr className="absolute border-none -top-18 bg-main-accent w-32 h-[0.375rem] sm:top-0 sm:left-0 sm:w-[0.375rem] sm:h-full" />
                    )}
                    <h2 className="text-h1-mobile uppercase sm:text-h1">
                        {title}
                    </h2>
                    <p
                        className={`text-body opacity-60 mt-4 sm:mt-5 ${
                            linkText ? 'mb-6 sm:mb-12' : ''
                        }`}
                    >
                        {bodyText}
                    </p>
                    {linkText && (
                        <Link
                            className="flex gap-5 text-h4 uppercase"
                            href={''}
                        >
                            <h4 className="text-h4 transition-all hover:underline">
                                {linkText}
                            </h4>
                            <Arrow />
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
