import { AxiosResponse } from 'axios';

import api from './api';

export const url = '/api/curses';

export type Curses = {
  id: number;
  name: string;
  associate: string[];
};

export async function useFetchCurses() {
  try {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Tempo limite da solicitação excedido'));
      }, 8000);
    });

    const responsePromise = api.get(url);

    const response = (await Promise.race([
      responsePromise,
      timeoutPromise
    ])) as AxiosResponse;

    return response.data;
  } catch (error) {
    console.error('Houve um erro ao buscar os cursos:', error);
  }
}
