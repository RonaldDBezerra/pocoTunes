import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [imageProfile, setImageProfile] = useState('');

  useEffect(() => {
      const userInfo = getUser();

      setName(userInfo.name);

      setEmail(userInfo.email);

      setDescription(userInfo.description);

      setImageProfile(userInfo.image);
  }, []);

  return (
    <>

      <Header />

      <div>
        <img alt='test' src={imageProfile} />
        <Link to="/profile/edit">
          <button>Editar perfil</button>
        </Link>
      </div>

      <div>
        <h3>Name</h3>
        <p>{name}</p>
      </div>

      <div>
        <h3>Email</h3>
        <p>{email}</p>
      </div>

      <div>
        <h3>Descrição</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Profile;
