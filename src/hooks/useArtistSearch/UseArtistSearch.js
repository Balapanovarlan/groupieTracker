import { useMemo, useState } from 'react';
import { useArtists } from '../UseArtists/UseArtists';

export const useArtistSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: artists = [], isLoading, isError } = useArtists();
  
    const filteredArtists = useMemo(() => {
      if (!searchTerm) return artists;
      const lowerCaseTerm = searchTerm.toLowerCase();
      return artists.filter(artist =>
        artist.name.toLowerCase().includes(lowerCaseTerm)
      );
    }, [artists, searchTerm]);
  
    return { searchTerm, setSearchTerm, filteredArtists, isLoading, isError };
  };