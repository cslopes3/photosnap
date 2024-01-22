const themeOptions = {
    dark: 'dark',
    light: 'light',
} as const;

export type themeType = keyof typeof themeOptions;

type PlansProps = {
    title: string;
    text: string;
    price: number;
    theme: themeType;
};

export function PlanCard(props: PlansProps) {
    return (
        <article
            className={`relative grid gap-10 px-5 pt-14 pb-10 sm:pt-10 sm:px-10 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-16 xl:grid-cols-none xl:pt-14 xl:gap-10 xl:max-w-[21.875rem] ${
                props.theme == 'light'
                    ? 'bg-[#F5F5F5] text-primary xl:my-6'
                    : 'bg-alt text-alt xl:pt-20 xl:pb-18 before:absolute before:top-0 before:bg-main-accent before:w-full before:h-[0.375rem] before:sm:w-[0.375rem] before:sm:h-full before:xl:w-full before:xl:h-[0.375rem]'
            }`}
        >
            <div className="flex flex-col items-center gap-4 sm:items-start xl:items-center">
                <h2 className="text-h2">{props.title}</h2>
                <p className="text-body opacity-60 text-center sm:text-start xl:text-center">
                    {props.text}
                </p>
            </div>
            <div className="flex flex-col items-center sm:items-end xl:items-center">
                <p className="text-h1">
                    {props.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
                <p className="text-body opacity-60">per month</p>
            </div>
            <button
                className={`py-3 px-20 text-h4 uppercase block mx-auto sm:w-full ${
                    props.theme == 'light'
                        ? 'bg-alt text-alt hover:bg-neutral hover:text-primary'
                        : 'bg-primary text-primary hover:bg-neutral'
                }`}
            >
                Pick plan
            </button>
        </article>
    );
}
