import { CardsType } from './cards-type';

import cards from 'data/card.json';

export const getCards = (): CardsType[] => {
    return cards;
};
