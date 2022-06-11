import React, { useContext } from 'react';
import { createUser } from '../services/userAPI';
import context from '../context/context';
import { Navigate } from 'react-router-dom';
import HeadPhones from '../imageSVG/HeadPhones';

function LoginTunes() {
  const {
    stateLogin,
    setStateLogin,
    stateValorDoButao,
    setStateValorDoButao,
    setStateLoading,
    stateLoadingIn,
    setStateLoadingIn,
  } = useContext(context);

  function analisaQuantidaDeLetras() {
    const NumeroMin = 3;

    if (stateLogin.length + 1 >= NumeroMin) {
      return setStateValorDoButao(false);
    }

    return setStateValorDoButao(true);
  }

  function handleChange({ target: { value } }, callBack) {
    callBack(value);

    analisaQuantidaDeLetras();
  }

  function clickButtonUser(event) {
    event.preventDefault();

    setStateLoading(true);

    createUser({
      name: stateLogin,
      email: 'exemplo@email.com',
      description: 'Sem descrição sobre você e seus gostos',
      image: 'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png',
    });

    setStateLoading(false);
    setStateLoadingIn(true);
  }

  return (
    <div data-testid="page-login" id='contentLogin'>
      {stateLoadingIn && <Navigate to="/search" />}

      <HeadPhones />

    <div id='content-inputs'>
      <input
        type="text"
        placeholder="Quem está ouvindo musica?"
        value={stateLogin}
        onChange={event => handleChange(event, setStateLogin)}
        name="login"
        id="login-name-input"
      />

        <button
          disabled={stateValorDoButao}
          onClick={clickButtonUser}
          type="submit"
          id="login-submit-button"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default LoginTunes;
