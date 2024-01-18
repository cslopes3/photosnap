import { PlansType } from './plans-type';

import plans from 'data/plans.json';

export const getPlans = (): PlansType[] => {
    return plans;
};
