import { Card, themeType } from 'app/components/card';
import { StoryCard } from 'app/components/story-card';

import { getCards } from 'app/utils/get-card-data';
import { getStories } from 'app/utils/get-stories';

export default function Home() {
    const cards = getCards();
    const storyCards = getStories(4);

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
                            imagesUrl={card.imagesUrl}
                        />
                    );
                })}
            </section>
        </main>
    );
}
