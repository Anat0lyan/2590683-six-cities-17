import { Cities } from '../../Mock';

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
