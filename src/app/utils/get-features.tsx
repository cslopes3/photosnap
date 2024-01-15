import { FeaturesType } from './features-type';

import features from 'data/features.json';

export const getFeatures = (amount?: number): FeaturesType[] => {
    if (amount) {
        return features.slice(0, amount);
    }

    return features;
};
