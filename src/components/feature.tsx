import Image from 'next/image';

type FeaturesProps = {
    title: string;
    text: string;
    imageUrl: string;
};

export function Feature({ title, text, imageUrl }: FeaturesProps) {
    return (
        <article className="grid gap-12 max-w-md mx-auto">
            <div className="mx-auto h-18 grid items-center">
                <Image
                    className="w-18 h-auto"
                    src={imageUrl}
                    width={0}
                    height={0}
                    alt=""
                />
            </div>
            <div className="text-center">
                <h3 className="text-h3 text-primary mb-4">{title}</h3>
                <p className="text-body text-primary opacity-60">{text}</p>
            </div>
        </article>
    );
}
