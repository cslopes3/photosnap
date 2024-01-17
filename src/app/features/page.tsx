import { Beta } from 'components/beta';
import { Card } from 'components/card';
import { Feature } from 'components/feature';

import { getFeatures } from 'app/utils/get-features';

export default function FeaturesPage() {
    const features = getFeatures();

    return (
        <main className="max-w-screen-2xl mx-auto">
            <section>
                <Card
                    imagesUrl={{
                        mobile: '/assets/features/mobile/hero.jpg',
                        tablet: '/assets/features/tablet/hero.jpg',
                        desktop: '/assets/features/desktop/hero.jpg',
                    }}
                    title="Features"
                    bodyText="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
                    theme={'dark'}
                    imgOnRight={true}
                />
            </section>

            <section className="w-3/4 mx-auto py-20 grid gap-14 max-w-6xl sm:gap-20 sm:py-28 lg:w-4/5 lg:grid-cols-3 lg:gap-8 lg:gap-y-24">
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
            <Beta />
        </main>
    );
}
