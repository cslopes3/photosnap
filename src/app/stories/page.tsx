import Link from 'next/link';

import { Arrow } from 'components/arrow';
import { StoryCard } from 'components/story-card';

import { getStories } from 'app/utils/get-stories';

export default function StoriesPage() {
    const storyCards = getStories();

    return (
        <main className="max-w-screen-2xl mx-auto">
            <section>
                <article className="relative">
                    <picture>
                        <source
                            media="(min-width:1280px)"
                            srcSet="/assets/stories/desktop/moon-of-appalacia.jpg"
                        />
                        <source
                            media="(min-width:640px)"
                            srcSet="/assets/stories/tablet/moon-of-appalacia.jpg"
                        />
                        <img
                            className="w-full h-full object-cover"
                            src="/assets/stories/mobile/moon-of-appalacia.jpg"
                            alt=""
                        />
                    </picture>
                    <div className="flex flex-col gap-4 py-12 px-7 bg-alt text-alt sm:absolute sm:w-[27.5rem] sm:py-0 sm:top-2/4 sm:-translate-y-2/4 sm:bg-transparent sm:pl-10 sm:pr-0 lg:pl-28">
                        <h6 className="text-h4 sm:mb-2">
                            Last month&apos;s featured story
                        </h6>
                        <h2 className="text-h1-mobile uppercase sm:text-h1">
                            Hazy full moon of appalachia
                        </h2>
                        <h6 className="text-subtitle">
                            <span className="opacity-75">March 2nd 2020</span>{' '}
                            by John Appleseed
                        </h6>
                        <p className="text-body opacity-60 my-2">
                            The dissected plateau area, while not actually made
                            up of geological mountains, is popularly called
                            &quot;mountains,&quot; especially in eastern
                            Kentucky and West Virginia, and while the ridges are
                            not high, the terrain is extremely rugged.
                        </p>
                        <Link
                            className="flex gap-5 text-h4 uppercase"
                            href={''}
                        >
                            <h4 className="text-h4 transition-all hover:underline">
                                Read the story
                            </h4>
                            <Arrow />
                        </Link>
                    </div>
                </article>
            </section>
            <section className="flex flex-wrap">
                {storyCards.map((card) => {
                    return (
                        <StoryCard
                            key={card.id}
                            title={card.title}
                            author={card.author}
                            imageUrl={card.imageUrl}
                        />
                    );
                })}
            </section>
        </main>
    );
}
