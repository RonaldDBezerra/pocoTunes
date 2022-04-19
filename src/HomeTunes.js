import React, { useState } from 'react';
import Context from './context/context';
import LoginTunes from './page/LoginTunes';

function HomeTunes () {
    const [stateLogin, setStateLogin] = useState('');
    const [stateValorDoButao, setStateValorDoButao] = useState(true);
    const [stateLoading, setStateLoading] = useState(false);
    const [stateLoadingIn, setStateLoadingIn] = useState(false);

    const INICIAL_STATE = {
      stateLogin, 
      setStateLogin,
      stateValorDoButao, 
      setStateValorDoButao,
      stateLoading, 
      setStateLoading,
      stateLoadingIn, 
      setStateLoadingIn,
    }

    return (
      <>
        <Context.Provider value={ INICIAL_STATE }>
          <LoginTunes />
        </Context.Provider>
       </>
    );
}

export default HomeTunes;
