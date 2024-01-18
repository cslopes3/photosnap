import { Beta } from 'components/beta';
import { Card } from 'components/card';
import { PricePlans } from 'components/price-plans';

export default function PricingPage() {
    return (
        <main className="max-w-screen-2xl mx-auto">
            <section>
                <Card
                    imagesUrl={{
                        mobile: '/assets/pricing/mobile/hero.jpg',
                        tablet: '/assets/pricing/tablet/hero.jpg',
                        desktop: '/assets/pricing/desktop/hero.jpg',
                    }}
                    title="Pricing"
                    bodyText="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
                    theme={'dark'}
                    imgOnRight={true}
                />
            </section>
            <div className="my-16 sm:my-28 xl:mt-28 xl:mb-40">
                <PricePlans />
            </div>
            <Beta />
        </main>
    );
}
