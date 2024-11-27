import axios from 'axios';

export default async function fetchData(
  url: string,
  params = {},
  headers = {}
) {
  try {
    const response = await axios.get(url, {
      params: params,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error.message);
    throw error;
  }
}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export interface CardType {
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  city: {
    location: Location;
    name: (typeof Cities)[number];
  };
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
}

export const isAuth = true as const;
export const email = 'Oliver.conner@gmail.com' as const;

export const sortTitels = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];
// export const offers: CardType[] = [
//   {
//     id: 1,
//     img: '/img/apartment-01.jpg',
//     isPremium: true,
//     isFavorite: false,
//     text: 'Beautiful & luxurious apartment at great location',
//     price: 120,
//     type: 'Apartment',
//     rating: 4,
//   },
//   {
//     id: 2,
//     price: 80,
//     isFavorite: true,
//     isPremium: false,
//     text: 'Wood and stone place',
//     type: 'Room',
//     img: 'img/room.jpg',
//     rating: 4,
//   },
//   {
//     id: 3,
//     price: 132,
//     isFavorite: false,
//     isPremium: false,
//     text: 'Canal View Prinsengracht',
//     type: 'Apartment',
//     img: 'img/apartment-02.jpg',
//     rating: 4,
//   },
//   {
//     id: 4,
//     price: 180,
//     isFavorite: false,
//     isPremium: true,
//     text: 'Canal View Prinsengracht',
//     type: 'Apartment',
//     img: 'img/apartment-03.jpg',
//     rating: 5,
//   },
//   {
//     id: 5,
//     price: 80,
//     isFavorite: true,
//     isPremium: false,
//     text: 'Wood and stone place',
//     type: 'Apartment',
//     img: 'img/room.jpg',
//     rating: 4,
//   },
// ];
