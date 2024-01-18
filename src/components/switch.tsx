'use client';

type SwitchButtonProps = {
    checked: boolean;
    setChecked: (checked: boolean) => void;
};

export function SwitchButton({ checked, setChecked }: SwitchButtonProps) {
    const handleClick = () => {
        setChecked(!checked);
    };

    return (
        <div className="flex gap-8 justify-center items-center">
            <span
                className={`text-h3 text-primary ${
                    checked ? 'opacity-50' : ''
                }`}
            >
                Monthly
            </span>
            <button
                className={`w-16 h-8 rounded-full relative ${
                    checked ? 'bg-alt' : 'bg-neutral'
                }`}
                onClick={() => handleClick()}
            >
                <span
                    className={`block ml-[0.125rem] w-6 h-6 rounded-full transition-all translate-x-0.5 ${
                        checked ? 'translate-x-8 bg-primary' : 'bg-alt'
                    }`}
                ></span>
            </button>
            <span
                className={`text-h3 text-primary ${
                    checked ? '' : 'opacity-50'
                }`}
            >
                Yearly
            </span>
        </div>
    );
}
