import React from 'react';
import { useParams } from 'react-router-dom';

const RedefinePass = () => {
  const params = useParams();
  const { token, idUser } = params;

  return (
    <>
      <h1>Para redefinir sua senha</h1>
      <h2>{token}</h2>
      <h2>{idUser}</h2>
    </>
  );
};

export default RedefinePass;
