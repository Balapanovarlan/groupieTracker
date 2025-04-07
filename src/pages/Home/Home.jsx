import React from 'react';
import { useArtists } from '../../hooks/UseArtists/UseArtists';
import ArtistList from '../../components/ArtistList/ArtistList';

const Home = () => {
  // const { data: artists, isLoading, isError } = useArtists();

  // if (isLoading) return <div>Загрузка...</div>;
  // if (isError) return <div>Ошибка при загрузке артистов</div>;

  // console.log(artists);
  
  // <div>
  //     <h1>Список артистов</h1>
  //     <ul>
  //       {artists.map((artist) => (
  //         <li key={artist.id}>{artist.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  return (
    <div>
      <ArtistList/>
    </div>
  );
};

export default Home;
