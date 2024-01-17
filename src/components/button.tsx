'use client';
import { ComponentProps, ReactNode } from 'react';

type ButtonType = {
    variant?: string;
    children: ReactNode;
};

export type ButtonProps = ComponentProps<'button'> & ButtonType;

export function Button({ variant, children, ...props }: ButtonProps) {
    let finalClasses = 'text-h4 w-40 h-10 uppercase transition-all group';

    switch (variant) {
        case 'secondary':
            finalClasses += ' text-primary';
            break;
        case 'primary-alt':
            finalClasses += ' bg-primary text-primary hover:bg-neutral';
            break;
        case 'secondary-alt':
            finalClasses += ' text-alt';
            break;
        default:
            finalClasses +=
                ' bg-alt text-alt hover:bg-neutral hover:text-primary';
            break;
    }

    return (
        <>
            <button {...props} className={finalClasses}>
                {children}
            </button>
        </>
    );
}
