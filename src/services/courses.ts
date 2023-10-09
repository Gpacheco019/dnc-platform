import { AxiosResponse } from 'axios';

import api from './api';

export type Curses = {
  id: number;
  name: string;
  associate: string[];
};

export async function useFetchCourses() {
  try {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Tempo limite da solicitação excedido'));
      }, 8000);
    });

    const responsePromise = api.get('/api/courses');

    const response = (await Promise.race([
      responsePromise,
      timeoutPromise
    ])) as AxiosResponse;

    return response.data;
  } catch (error) {
    console.error('Houve um erro ao buscar os cursos:', error);
  }
}

export async function useFetchByFormation(course: string) {
  try {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Tempo limite da solicitação excedido'));
      }, 8000);
    });

    const responsePromise = api.get(`/api/formation?course=${course}`);

    const response = (await Promise.race([
      responsePromise,
      timeoutPromise
    ])) as AxiosResponse;

    return response.data;
  } catch (error) {
    console.error('Houve um erro ao buscar a formação desejada:', error);
    throw error;
  }
}
