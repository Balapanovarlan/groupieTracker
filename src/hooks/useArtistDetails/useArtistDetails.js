import { useQuery } from '@tanstack/react-query';
import { fetchArtistDetails } from '../../api/groupieApi';


export const useArtistDetails = (id) => {
  return useQuery({
    queryKey: ['artist', id],
    queryFn: () => fetchArtistDetails(id),
    enabled: !!id,
  });
};