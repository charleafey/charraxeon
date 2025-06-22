import Preview1 from './previews/PORTFOLIO (all)  - 1 of 26.jpeg';
import Preview2 from './previews/PORTFOLIO (all)  - 2 of 26.jpeg';
import Preview3 from './previews/PORTFOLIO (all)  - 3 of 26.jpeg';
import Preview4 from './previews/PORTFOLIO (all)  - 4 of 26.jpeg';
import Preview5 from './previews/PORTFOLIO (all)  - 5 of 26.jpeg';
import Preview6 from './previews/PORTFOLIO (all)  - 6 of 26.jpeg';
import Preview7 from './previews/PORTFOLIO (all)  - 7 of 26.jpeg';
import Preview8 from './previews/PORTFOLIO (all)  - 8 of 26.jpeg';
import Preview9 from './previews/PORTFOLIO (all)  - 9 of 26.jpeg';
import Preview10 from './previews/PORTFOLIO (all)  - 10 of 26.jpeg';
import Preview11 from './previews/PORTFOLIO (all)  - 11 of 26.jpeg';
import Preview12 from './previews/PORTFOLIO (all)  - 12 of 26.jpeg';
import Preview13 from './previews/PORTFOLIO (all)  - 13 of 26.jpeg';
import Preview14 from './previews/PORTFOLIO (all)  - 14 of 26.jpeg';
import Preview15 from './previews/PORTFOLIO (all)  - 15 of 26.jpeg';
import Preview16 from './previews/PORTFOLIO (all)  - 16 of 26.jpeg';
import Preview17 from './previews/PORTFOLIO (all)  - 17 of 26.jpeg';
import Preview18 from './previews/PORTFOLIO (all)  - 18 of 26.jpeg';
import Preview19 from './previews/PORTFOLIO (all)  - 19 of 26.jpeg';
import Preview20 from './previews/PORTFOLIO (all)  - 20 of 26.jpeg';
import Preview21 from './previews/PORTFOLIO (all)  - 21 of 26.jpeg';
import Preview22 from './previews/PORTFOLIO (all)  - 22 of 26.jpeg';
import Preview23 from './previews/PORTFOLIO (all)  - 23 of 26.jpeg';
import Preview24 from './previews/PORTFOLIO (all)  - 24 of 26.jpeg';
import Preview25 from './previews/PORTFOLIO (all)  - 25 of 26.jpeg';
import Preview26 from './previews/PORTFOLIO (all)  - 26 of 26.jpeg';

import Design1 from './designs/PORTFOLIO (all)  - 1 of 7.jpeg';
import Design2 from './designs/PORTFOLIO (all)  - 2 of 7.jpeg';
import Design3 from './designs/PORTFOLIO (all)  - 3 of 7.jpeg';
import Design4 from './designs/PORTFOLIO (all)  - 4 of 7.jpeg';
import Design5 from './designs/PORTFOLIO (all)  - 5 of 7.jpeg';
import Design6 from './designs/PORTFOLIO (all)  - 6 of 7.jpeg';
import Design7 from './designs/PORTFOLIO (all)  - 7 of 7.jpeg';

export interface Illustration {
    image?: string;
    preview: string;
    date?: string;
    category?: string;
    title?: string;
}

export const galleryImages: Illustration[] = [
    {
        title: 'Beachside',
        category: 'Original',
        preview: Preview1,
        date: '2025',
    },
    {
        title: 'Forest Encounter',
        category: 'Original',
        preview: Preview2,
        date: '2024',
    },
    {
        title: 'Fiddle Leaf Fig',
        category: 'Original',
        preview: Preview3,
        date: '2024',
    },
    {
        title: 'Rockpools',
        category: 'Original',
        preview: Preview4,
        date: '2024',
    },
    {
        title: 'Ciel',
        category: 'Original',
        preview: Preview5,
        date: '2024',
    },
    {
        title: 'Red Gums after Rain',
        category: 'Original',
        preview: Preview6,
        date: '2025',
    },
    {
        title: "Una's Grove",
        category: 'Original',
        preview: Preview7,
        date: '2024',
    },
    {
        title: 'Chihiro & Haku',
        category: 'Spirited Away',
        preview: Preview8,
        date: '2024',
    },
    {
        title: 'Meadow of Spirits',
        category: 'My Neighbour Totoro',
        preview: Preview9,
        date: '2025',
    },
    {
        title: 'Mitsuki & Aya',
        category: "The Guy She Was Interested In Wasn't A Guy At All",
        preview: Preview10,
        date: '2025',
    },
    {
        title: 'Eevee & Leafeon',
        category: 'Pokémon',
        preview: Preview11,
        date: '2024',
    },
    {
        title: 'Caitlyn & Vi',
        category: 'Arcane',
        preview: Preview12,
        date: '2024',
    },
    {
        title: "Traveller's Picnic",
        category: 'Legend of Zelda',
        preview: Preview13,
        date: '2025',
    },
    {
        title: 'The Light Dragon',
        category: 'Legend of Zelda',
        preview: Preview14,
        date: '2024',
    },
    {
        title: 'Flowers',
        category: 'Legend of Zelda',
        preview: Preview15,
        date: '2024',
    },
    {
        title: "Jinx's Workshop",
        category: 'Arcane (Season 2)',
        preview: Preview16,
        date: '2024',
    },
    {
        title: 'Recovery',
        category: 'Arcane (Season 2)',
        preview: Preview17,
        date: '2025',
    },
    {
        title: 'Fairy Kazuha',
        category: 'Genshin Impact',
        preview: Preview18,
        date: '2023',
    },
    {
        title: 'Scaramouche',
        category: 'Genshin Impact',
        preview: Preview19,
        date: '2024',
    },
    {
        title: 'Venti - Photocard',
        category: 'Genshin Impact',
        preview: Preview20,
        date: '2024',
    },
    {
        title: 'Kazuha - Photocard',
        category: 'Genshin Impact',
        preview: Preview21,
        date: '2024',
    },
    {
        title: "Venti's Melody",
        category: 'Genshin Impact',
        preview: Preview22,
        date: '2024',
    },
    {
        title: 'Raiden and Ei',
        category: 'Genshin Impact',
        preview: Preview23,
        date: '',
    },
    {
        title: 'Zhongli - Chrysanthemum Tea',
        category: 'Genshin Impact',
        preview: Preview24,
        date: '2024',
    },
    {
        title: 'Raiden - Lotus',
        category: 'Genshin Impact',
        preview: Preview25,
        date: '2023',
    },
    {
        title: 'Kenma',
        category: 'Haikyu!!',
        preview: Preview26,
        date: '2024',
    },
];

export const galleryDesigns: Illustration[] = [
    {
        title: 'Springtime',
        category: 'Stardew Valley',
        preview: Design1,
        date: '2025',
    },
    {
        title: 'Lucky Bunnies',
        category: 'Original',
        preview: Design2,
        date: '2025',
    },
    {
        title: 'Green Yuri Set',
        category: "The Guy She Was Interested In Wasn't A Guy At All",
        preview: Design3,
        date: '2025',
    },
    {
        title: 'Eeveelutions',
        category: 'Pokémon',
        preview: Design4,
        date: '2024',
    },
    {
        title: 'Frogs and Rainbows',
        category: 'Original',
        preview: Design5,
        date: '2024',
    },
    {
        title: 'Hyrule Compedium - ft. Hot-Footed Frog',
        category: 'Legend of Zelda',
        preview: Design6,
        date: '2024',
    },
    {
        title: 'Wish Upon A Shark',
        category: 'Original',
        preview: Design7,
        date: '2024',
    },
];
