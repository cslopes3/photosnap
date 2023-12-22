import { Arrow } from './arrow';

export function StoryCard() {
    return (
        <>
            <article
                className="relative text-alt w-full bg-[url('/assets/stories/mobile/mountains.jpg')] bg-cover bg-center transition-all sm:w-2/4 lg:w-1/4
                           hover:bottom-5 hover:after:bg-main-accent hover:after:w-full hover:after:absolute hover:after:h-[0.375rem]"
            >
                <div className="bg-gradient-black pb-10">
                    <div className="mx-auto w-mobile-card h-full flex flex-col pt-60 sm:w-default-card sm:pt-[22.5625rem]">
                        <h3 className="text-h3 flex-grow-0 mt-auto">
                            The Mountains
                        </h3>
                        <span className="text-subtitle mt-1">
                            By John Appleseed
                        </span>
                        <hr className="bg-primary opacity-25 h-[1px] border-none mt-4 mb-5" />
                        <div className="flex justify-between">
                            <h4 className="text-h4 uppercase">Read Story</h4>
                            <Arrow />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
