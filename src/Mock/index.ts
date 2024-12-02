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

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export const sortTitels = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum Routes {}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const isAuth = true;
export const email = 'Oliver.conner@gmail.com' as const;
