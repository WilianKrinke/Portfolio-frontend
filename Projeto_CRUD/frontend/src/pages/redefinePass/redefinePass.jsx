/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import resetPass from '../../utils/resetPass/resetPass';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/authContext';
import { DivLoading } from '../../primeComponents';

const RedefinePass = () => {
  const params = useParams();
  const { token, idUser } = params;

  const {
    states: { loading, setLoading },
  } = useContext(Context);

  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await resetPass(token, idUser);
      const { data } = response;

      console.log(data);

      if (data.wasValid) {
        setLoading(false);
      } else {
        navigate('/');
      }

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
