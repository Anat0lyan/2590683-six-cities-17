import axios, { AxiosResponse } from 'axios';

export const isAuth = true;
export const email = 'Oliver.conner@gmail.com' as const;

export const API = 'https://16.design.htmlacademy.pro';

export default async function fetchData(
  url: string,
  params = {},
  headers = {}
) {
  try {
    const response: AxiosResponse<[]> = await axios.get(url, {
      params: params,
      headers: headers,
    });
    console.log('запрос ушел');
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error.message);
    throw error;
  }
}
