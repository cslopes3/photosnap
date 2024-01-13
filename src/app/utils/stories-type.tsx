type ImagesUrl = {
    mobile: string;
    tablet: string;
    desktop: string;
};

export type StoriesType = {
    id: number;
    dateText: string;
    title: string;
    author: string;
    imagesUrl: ImagesUrl;
};
