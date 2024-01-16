import { Card, themeType } from 'app/components/card';
import { Feature } from 'app/components/feature';
import { StoryCard } from 'app/components/story-card';

import { getCards } from 'app/utils/get-card-data';
import { getFeatures } from 'app/utils/get-features';
import { getStories } from 'app/utils/get-stories';

export default function Home() {
    const cards = getCards();
    const storyCards = getStories(4);
    const features = getFeatures(3);

    return (
        <main className="max-w-screen-2xl mx-auto">
            <section>
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={card.id}
                            imagesUrl={card.imagesUrl}
                            title={card.title}
                            bodyText={card.bodyText}
                            linkText={card.textLink}
                            theme={card.theme as themeType}
                            imgOnRight={index % 2 === 0}
                        />
                    );
                })}
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
            <section className="w-3/4 mx-auto py-20 grid gap-14 max-w-6xl sm:gap-20 sm:py-28 lg:w-4/5 lg:grid-cols-3 lg:gap-8">
                {features.map((feature) => {
                    return (
                        <Feature
                            key={feature.id}
                            title={feature.title}
                            text={feature.text}
                            imageUrl={feature.imageUrl}
                        />
                    );
                })}
            </section>
        </main>
    );
}
