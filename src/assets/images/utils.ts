import Image1 from './illustrations/1-una-ciel-beach.PNG';
import Image2 from './illustrations/2-una-ciel-forest.PNG';
import Image3 from './illustrations/3-ciel-greenhouse.PNG';

interface Illustration {
    image: string;
    date: string;
}

export const galleryImages: Illustration[] = [
    {
        image: Image1,
        date: '2025',
    },
    {
        image: Image2,
        date: '2024',
    },
    {
        image: Image3,
        date: '2025',
    },
];
