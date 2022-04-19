import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';

function Favorites() {
  const [favoriteMusics, setFavoriteMusics] = useState([]);
  const [musicsId, setMusicsId] = useState([]);

  useEffect(() => {
    const getFavoritesMusics = getFavoriteSongs();

    setFavoriteMusics(getFavoritesMusics);

  }, []);
  
  
  useEffect(() => {
    favoriteMusics.map(objectMusic =>
      setMusicsId(prevState => [...prevState, objectMusic.trackId])
    );
    
  }, [favoriteMusics])

  function handleFavoriteMusic({ target }, music) {
    const artistId = target.id;

    if (!target.checked) {
      removeSong(music);
      setMusicsId(prevState => prevState.filter(elem => Number(elem) !== Number(artistId)));
    } else {
      addSong(music);
      setMusicsId(prevState => [...prevState, artistId]);
    }
  }

  function musicCard(music, musicsId) {
    return (
      <>
        <div>
          {music.trackName}
          <audio data-testid="audio-component" src={music.previewUrl} controls>
            <track kind="captions" />O seu navegador não suporta o elemento{' '}
            <code>audio</code>.
          </audio>
        </div>

        <div>
          <label htmlFor={music.trackId}>
            Favorita
            <input
              checked={musicsId.some(
                id => Number(id) === Number(music.trackId)
              )}
              name="checkbox"
              onChange={event => handleFavoriteMusic(event, music)}
              type="checkbox"
              id={music.trackId}
              data-testid={`checkbox-music-${music.trackId}`}
            />
          </label>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      {favoriteMusics.map((music, index) => musicCard(music, musicsId))}
    </>
  );
}

export default Favorites;
