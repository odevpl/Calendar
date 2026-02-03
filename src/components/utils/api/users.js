import apiClient from './apiClient';

export const getUsers = async () => {
  const { data } = await apiClient.get('/users');
  return data;
};

export const updateUser = async (id, payload) => {
    const { data } = await apiClient.put(`/users/${id}`, payload);
    return data;
};

export const deleteUser = async (id) => {
    return apiClient.delete(`/users/${id}`);
}