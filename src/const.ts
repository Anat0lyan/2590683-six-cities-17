export enum Routes {}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export enum RoutesTo {
  LOGIN = 'login',
  FAVORITES = 'favorites',
  OFFER = 'offer',
}

export const sortTitels = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

// type Location = {
//   latitude: number;
//   longitude: number;
//   zoom: number;
// };
