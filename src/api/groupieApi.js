import axios from "axios";

const groupieApi = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
    },
});

export const fetchArtists = async () => {
    try {
      const response = await groupieApi.get('/artists');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const fetchArtistDetails = async (id) => {
  try {
    const [artistResponse, relationResponse, locationsResponse, datesResponse] = await Promise.all([
      groupieApi.get(`/artists/${id}`),
      groupieApi.get(`/relation/${id}`),
      groupieApi.get(`/locations/${id}`),
      groupieApi.get(`/dates/${id}`),
    ]);

    const artist = artistResponse.data;
    const relationData = relationResponse.data;
    const locationsData = locationsResponse.data;
    const datesData = datesResponse.data;

    console.log(datesData);
    
    return {
      artist,
      relation: relationData,
      locations: locationsData,
      dates: datesData,
    };
  } catch (error) {
    console.error('Failed to fetch artist details:', error);
    throw error;
  }
};

