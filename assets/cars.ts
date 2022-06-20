export interface ICar {
    id: number;
    title: string;
    img: string;
    text: string;
    price: number;
    rating: {
        value: number;
        text: string;
    };
}

export const cars: ICar[] = [
    {
        id: 1,
        title: 'Economy',
        img: 'econom.png',
        text: 'Toyota Yaris or similar',
        price: 2.25,
        rating: {
            value: 5,
            text: 'Average Customer Rating',
        },
    },
    {
        id: 2,
        title: 'Compact',
        img: 'econom.png',
        text: 'Toyota Yaris or similar',
        price: 2.375,
        rating: {
            value: 5,
            text: 'Average Customer Rating',
        },
    },
    {
        id: 3,
        title: 'Intermediate',
        img: 'comfort.jpg',
        text: 'Nissan Versa or similar.',
        price: 3.5,
        rating: {
            value: 4,
            text: 'Average Customer Rating',
        },
    },
    {
        id: 4,
        title: 'Standard',
        img: 'standard.jpg',
        text: 'Toyota Corolla or similar.',
        price: 3.625,
        rating: {
            value: 3.5,
            text: 'Average Customer Rating',
        },
    },
    {
        id: 5,
        title: 'Compact SUV',
        img: 'CompactSUV.png',
        text: 'Nissan Kicks or similar.',
        price: 4.5,
        rating: {
            value: 2.5,
            text: 'Average Customer Rating',
        },
    },
    {
        id: 6,
        title: 'Intermediate SUV',
        img: 'IntermediateSUV.jpg',
        text: 'Nissan Rogue or similar.',
        price: 4.625,
        rating: {
            value: 5,
            text: 'Average Customer Rating',
        },
    },
    {
        id: 7,
        title: 'Standard SUV',
        img: 'StandardSUV.jpg',
        text: 'Jeep Wrangler Unlimited Sport or similar.',
        price: 5.25,
        rating: {
            value: 5,
            text: 'Average Customer Rating',
        },
    },
];
