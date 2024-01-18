import { PlanItemsType } from './plan-items-type';

import planItems from 'data/plan-items.json';

export const getPlanItems = (): PlanItemsType[] => {
    return planItems;
};
