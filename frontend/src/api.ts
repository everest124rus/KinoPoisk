import axios from 'axios';
import type { Movie } from './types';

const API_URL = 'http://localhost:3000/movies';

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<Movie[]>(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Ошибка загрузки данных: ${error.message}`);
    }
    throw new Error('Неизвестная ошибка при загрузке фильмов');
  }
};

export const fetchMovieById = async (id: number): Promise<Movie> => {
  try {
    const response = await axios.get<Movie>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Ошибка загрузки фильма: ${error.message}`);
    }
    throw new Error('Неизвестная ошибка при загрузке фильма');
  }
};

