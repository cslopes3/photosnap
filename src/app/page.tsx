import { StoryCard } from './components/story-card';

export default function Home() {
    return (
        <main className="max-w-screen-2xl mx-auto">
            Initial Setup
            <section className="flex flex-row flex-wrap">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </section>
        </main>
    );
}
