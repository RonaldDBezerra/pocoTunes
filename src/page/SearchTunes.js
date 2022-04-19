import React, {useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

function SearchTunes() {

  const [musics, setMusics] = useState([])
  const [name, setName] = useState('')
  const [nameSec, setNameSec] = useState('')
  const [albunsComplete, setAlbunsComplete] = useState(false)

  function handleChange({ target: { value } }, callBack) {
    callBack(value);
  }

  async function  getMusics () {
    const resultado = await searchAlbumsAPI(name)

    setNameSec(name)

    setName('')

    setMusics([])

    setMusics(resultado)

    setAlbunsComplete(true)
  }

  function renderAlbuns(param) {
    if (param.length === 0) {
      return <span>Nenhum álbum foi encontrado</span>;
    }

    return param.map((album) => (
      <Link
        data-testid={ `link-to-album-${album.collectionId}` }
        key={ album.artistName }
        to={ `/album/${album.collectionId}` }
      >
        <section> 
          <h1>{album.artistName}</h1>
          <p>{album.collectionName}</p>
          <img src={ album.artworkUrl100 } alt="imagem do album" />
        </section>
      </Link>
    ));
  }


return (
  <section>
   <Header />
   <input
   value={name}
   onChange={(event) => handleChange(event, setName)} 
   placeholder='Coloque o nome do artista'>
   </input>

   <button
   onClick={getMusics}>
     Pesquisar
   </button>
{(albunsComplete) && (
  <>
  <h1>Resultado de álbuns de: {nameSec}</h1>
  <span> {renderAlbuns(musics)} </span>
  </>
)}
 </section> 
)
}

export default SearchTunes