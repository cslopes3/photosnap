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
        <main>
            <section>
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            imagesUrl={card.imagesUrl}
                            title={card.title}
                            bodyText={card.bodyText}
                            linkText={card.textLink}
                            theme={card.theme as themeType}
                        />
                    );
                })}
            </section>
            <section>
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
            <section className="w-3/4 mx-auto grid gap-14 sm:gap-20 max-w-6xl lg:w-4/5 lg:grid-cols-3 lg:gap-8">
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
