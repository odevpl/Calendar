// import { data } from 'react-router-dom';
// import { api } from './api';
import apiClient from './apiClient';

const apiGet = async ({ url, params, errorMessage }) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(errorMessage, error);
    throw error;
  }
};

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

// calendar
// ============================================
// get all slots
export const getCalendar = async () => {
  const payload = await apiGet({
    url: 'all-terms',
    errorMessage: 'Nie udało się pobrać terminow',
  });

  return payload;
};

// //  calendar do testowania z przykładowymi danymi z bazy
// ==========================================================================
// export const addTwoTestDays = async () => {
//   const terms = [
//     // DZIEŃ 1
//     { startTime: '09:00:00', date: '2026-01-30', userId: 1 },
//     { startTime: '09:30:00', date: '2026-01-30', userId: 1 },
//     { startTime: '10:00:00', date: '2026-01-30', userId: 1 },

//     // DZIEŃ 2
//     { startTime: '11:00:00', date: '2026-01-31', userId: 1 },
//     { startTime: '11:30:00', date: '2026-01-31', userId: 1 },

//     { startTime: '20:30:00', date: '2026-02-01', userId: 1 },
//   ];

//   await Promise.all(
//     terms.map((term) =>
//       apiPost({
//         url: 'terms',
//         data: term,
//         errorMessage: 'Nie udało się dodać testowego terminu',
//       }),
//     ),
//   );
// };

// usuwanie dodatnych slotów
// ==========================================================================
export const deleteTerm = async (id) => {
  return apiClient.delete(`terms/${id}`, {
    data: { userId: 1 },
  });
};
