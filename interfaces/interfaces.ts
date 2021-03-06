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

export interface IDate {
    year: number;
    month: number;
    day: number;
    time: number;
}

export interface ITime {
    totaldays : number;
}

export interface ICheckin {
    firstName: string;
    lastName: string;
    email: string;
    phone: number; 
}

export interface IMarker {
    lat: number;
    lng: number;
}
