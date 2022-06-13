import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
// import heart from '../image/heart'

function Header() {
  const [stateName, setStateName] = useState('');
  const [imageProfile, setImageProfile] = useState('');

  useEffect(() => {
    const infoUsuario = getUser();
    setStateName(infoUsuario.name);
    setImageProfile(infoUsuario.image);
  }, []);

  return (
    <header id='header-container'>
      <nav id='header-nav'>
        <Link to="/search"  className='link' id="link-to-search">
          Pesquisa
        </Link>

        <Link to="/favorites" className='link' id="link-to-favorites">
          Favorito
        </Link>

        <Link to="/profile" className='link' id="link-to-profile">
          Meu perfil
        </Link>
      </nav>
        <div id="header-info">
          <div>
            <span id="header-user-name">{stateName}</span>
          </div>
          <div>
            <img id='image-header' alt='test' src={imageProfile} />
          </div>
        </div>

    </header>
  );
}

export default Header;
