import axios from 'axios';

export default async function fetchSearchData(query) {
  try {
    const pharmacyIds = '1,2,3'; // Replace with your desired pharmacy IDs
    const apiUrl = `https://backend.cappsule.co.in/api/v1/new_search?q=${query}&pharmacyIds=${pharmacyIds}`;

    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}