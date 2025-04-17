import { useQuery } from '@tanstack/react-query';
import { fetchArtists } from '../../api/groupieApi';


export const useArtists = () => {
  return useQuery({
    queryKey: ['artists'],
    queryFn: fetchArtists,
    // staleTime: 1000 * 60 * 5, 
  });
};
