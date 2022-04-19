import React from 'react';

function MusicCard({ music, favoritos, handleFavoriteMusic }) {
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
          {' '}
          Favorita
          <input
            defaultChecked={favoritos.some(id => Number(id) === Number(music.trackId))}
            name="checkbox"
            onChange={(event) => handleFavoriteMusic(event, music)}
            type="checkbox"
            id={music.trackId}
            data-testid={`checkbox-music-${music.trackId}`}
          />
        </label>
      </div>
    </>
  );
}

export default MusicCard;
