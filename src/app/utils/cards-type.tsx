type ImagesUrl = {
    mobile: string;
    tablet: string;
    desktop: string;
};

export type CardsType = {
    id: number;
    title: string;
    bodyText: string;
    textLink: string;
    imagesUrl: ImagesUrl;
    theme: string;
};
