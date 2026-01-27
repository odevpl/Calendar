import apiClient from './apiClient';

const apiGet = async ({url, params, errorMessage }) => {
    try {
        const response = await apiClient.get(url, { params });
        return response.data;
    } catch (error) {
        console.error(errorMessage, error);
        throw error;
    }
}

const apiPost = async ({ url, data, errorMessage }) => {
    try {
        const response = await apiClient.post(url, data);
        return response.data;
    } catch (error) {
        console.error(errorMessage, error);
        throw error;
    }
};

/**
 * GET /api/test
 */
export const testConnection = async () => {
  const payload = await apiGet({
    url: 'test',
    errorMessage: 'Nie udało się połączyć z backendem',
  });
  return payload;
};