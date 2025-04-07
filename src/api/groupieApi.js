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
      const [artistsResponse, relationResponse, locationsResponse, datesResponse] = await Promise.all([
        groupieApi.get('/artists'),
        groupieApi.get('/relation'),
        groupieApi.get('/locations'),
        groupieApi.get('/dates'),
      ]);
  
      const artists = artistsResponse.data;
      const artist = artists.find(item => item.id === Number(id));
      if (!artist) {
        throw new Error(`Artist with id ${id} not found`);
      }
  
      const artistRelation = relationResponse.data[id] || null;
      const artistLocations = locationsResponse.data[id] || null;
      const artistDates = datesResponse.data[id] || null;
  
      return {
        artist,
        relation: artistRelation,
        locations: artistLocations,
        dates: artistDates,
      };
    } catch (error) {
      throw error;
    }
};

