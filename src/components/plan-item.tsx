import Image from 'next/image';

type PlanItemProps = {
    name: string;
    basic: boolean;
    pro: boolean;
    business: boolean;
};

export function PlanItem({ name, basic, pro, business }: PlanItemProps) {
    return (
        <>
            <div className="grid gap-4 text-primary sm:grid-cols-2">
                <p className="text-h4 uppercase">{name}</p>
                <div className="grid grid-cols-3 text-[0.625rem] uppercase tracking-widest">
                    <div className="grid gap-2 sm:gap-0">
                        <p className="opacity-50 sm:hidden">Basic</p>
                        {basic && (
                            <Image
                                className="w-4 h-3"
                                src="/assets/pricing/desktop/check.svg"
                                width={0}
                                height={0}
                                alt=""
                            />
                        )}
                    </div>
                    <div className="grid gap-2 sm:gap-0">
                        <p className="opacity-50 sm:hidden">Pro</p>
                        {pro && (
                            <Image
                                className="w-4 h-3"
                                src="/assets/pricing/desktop/check.svg"
                                width={0}
                                height={0}
                                alt=""
                            />
                        )}
                    </div>
                    <div className="grid gap-2 sm:gap-0">
                        <p className="opacity-50 sm:hidden">Business</p>
                        {business && (
                            <Image
                                className="w-4 h-3"
                                src="/assets/pricing/desktop/check.svg"
                                width={0}
                                height={0}
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </div>
            <hr className="bg-neutral h-[1px] border-none my-6" />
        </>
    );
}
