export interface CardType {
  id: number;
  isPremium: boolean;
  isFavorite: boolean;
  text: string;
  price: number;
  type: string;
  img: string;
  rating: number;
}
export const offers: CardType[] = [
  {
    id: 1,
    img: '/img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
    text: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: 'Apartment',
    rating: 4,
  },
  {
    id: 2,
    price: 80,
    isFavorite: true,
    isPremium: false,
    text: 'Wood and stone place',
    type: 'Room',
    img: 'img/room.jpg',
    rating: 4,
  },
  {
    id: 3,
    price: 132,
    isFavorite: false,
    isPremium: false,
    text: 'Canal View Prinsengracht',
    type: 'Apartment',
    img: 'img/apartment-02.jpg',
    rating: 4,
  },
  {
    id: 4,
    price: 180,
    isFavorite: false,
    isPremium: true,
    text: 'Canal View Prinsengracht',
    type: 'Apartment',
    img: 'img/apartment-03.jpg',
    rating: 5,
  },
  {
    id: 5,
    price: 80,
    isFavorite: true,
    isPremium: false,
    text: 'Wood and stone place',
    type: 'Apartment',
    img: 'img/room.jpg',
    rating: 4,
  },
];
