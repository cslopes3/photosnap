'use client';

import { useState } from 'react';

import { PlanCard, themeType } from './plan-card';
import { PlanItem } from './plan-item';
import { SwitchButton } from './switch';

import { getPlanItems } from 'utils/get-plan-items';
import { getPlans } from 'utils/get-plans';

export function PricePlans() {
    const [switchChecked, setSwitchChecked] = useState(false);

    const plans = getPlans();
    const planItems = getPlanItems();

    return (
        <>
            <SwitchButton
                checked={switchChecked}
                setChecked={setSwitchChecked}
            />

            <section className="flex flex-col gap-6 px-7 mt-10 justify-center xl:flex-row xl:mt-12">
                {plans.map((plan) => {
                    return (
                        <PlanCard
                            key={plan.id}
                            title={plan.title}
                            text={plan.text}
                            price={
                                switchChecked
                                    ? plan.yearlyPrice
                                    : plan.monthlyPrice
                            }
                            theme={plan.theme as themeType}
                        />
                    );
                })}
            </section>

            <section className="px-7 my-16 sm:px-10 sm:py-16 xl:w-2/4 xl:py-24 xl:mx-auto">
                <h2 className="hidden text-primary text-h1 uppercase mx-auto: sm-block">
                    Compare
                </h2>
                <div className="text-h4 text-primary uppercase sm:grid sm:grid-cols-2">
                    <p>The features</p>
                    <div className="hidden sm:grid sm:grid-cols-3">
                        <p>Basic</p>
                        <p>Pro</p>
                        <p>Business</p>
                    </div>
                </div>
                <hr className="bg-alt h-[1px] border-none my-6" />
                {planItems.map((item) => {
                    return (
                        <PlanItem
                            key={item.id}
                            name={item.name}
                            basic={item.basic}
                            pro={item.pro}
                            business={item.business}
                        />
                    );
                })}
            </section>
        </>
    );
}
