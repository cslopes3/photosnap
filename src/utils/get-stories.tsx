import { StoriesType } from './stories-type';

import stories from 'data/stories.json';

export const getStories = (amount?: number): StoriesType[] => {
    if (amount) {
        return stories.slice(0, amount);
    }

    return stories;
};
