import React from 'react';
import { useArtists } from '../../hooks/UseArtists/UseArtists';
import ArtistList from '../../components/ArtistList/ArtistList';

const Home = () => {
  return (
    <div>
      <ArtistList/>
    </div>
  );
};

export default Home;
