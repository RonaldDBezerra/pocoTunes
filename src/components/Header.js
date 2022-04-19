import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

function Header() {
  const [stateName, setStateName] = useState('');
  const [imageProfile, setImageProfile] = useState('');

  useEffect(() => {
    const infoUsuario = getUser();
    setStateName(infoUsuario.name);
    setImageProfile(infoUsuario.image);
  }, []);

  return (
    <header className="flex w-[500px] justify-between bg-slate-200 hover:bg-red-200 duration-500 sm:bg-slate-900 md:bg-red-500 lg:bg-blue-500">
      <Link to="/search" id="link-to-search">
        Pesquisa
      </Link>

      <Link to="/favorites" id="link-to-favorites">
        Favorito
      </Link>

      <Link to="/profile" id="link-to-profile">
        Meu perfil
      </Link>
        <div>
          <span data-testid="header-user-name">{stateName}</span>
          <img src={imageProfile} />
        </div>
    </header>
  );
}

export default Header;
