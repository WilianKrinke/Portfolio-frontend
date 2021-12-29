/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { Context } from '../../context/authContext';
import { DivLoading } from '../../primeComponents';
import resetPass from '../../utils/resetPass/resetPass';

const RedefinePass = () => {
  const params = useParams();
  const { token, idUser } = params;

  const {
    states: { loading, setLoading },
  } = useContext(Context);

  useEffect(() => {
    (async () => {
      console.log(token);
      console.log(idUser);

      const response = await resetPass(token, idUser);
      setLoading(false);
      //lógica de verificação de válidade de tempo de token
    })();
  }, []);

  return (
    <>
      {loading ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <h1>Para redefinir sua senha</h1>
          <h2>{token}</h2>
          <h2>{idUser}</h2>
        </>
      )}
    </>
  );
};

export default RedefinePass;
