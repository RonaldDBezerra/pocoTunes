import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { createUser } from '../services/userAPI'

function ProfileEdit () {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [imageProfile, setImageProfile] = useState('');

  const editUser = (name, email, description, image) => {
    createUser({name, email, description, image})
  }

  function handleChange({ target: { value } }, callBack) {
    callBack(value);

  }

  return (
    <>
      <Header />
      <div>
        <h3>coloque a url da sua imagem de perfil</h3>
        <input type='url' onChange={(event) => handleChange(event, setImageProfile)} value={imageProfile}/>
      </div>

      <div>
        <h3>Altere seu Nome</h3>
        <input type='text' onChange={(event) => handleChange(event, setName)} value={name}/>
      </div>

      <div>
        <h3>Email</h3>
        <input type='text' onChange={(event) => handleChange(event, setEmail)}  value={email}/>
      </div>

      <div>
        <h3>Descreva seus gostos musicais</h3>
        <textarea rows="10" cols="50" onChange={(event) => handleChange(event, setDescription)}  value={description}/>
      </div>

      <div>
        <Link to='/profile'>
          <button type='submit' onClick={() => editUser(name, email, description, imageProfile)}>Enviar</button>
        </Link>
      </div>
    </>
  )
}

export default ProfileEdit