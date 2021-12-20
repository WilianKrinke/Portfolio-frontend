import styled from 'styled-components'

export const ButtonChangeForm = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  bottom: 54px;
  left: 85px;
  color: #222;

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.3);    
   }

   @media screen and (max-width: 470px) {
    position: relative;
    top: 0px;
    left: 0px;
  }
`

export const ButtonBackToLogin = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  bottom: 17px;
  left: 85px;
  color: #222222;

  :hover {
  background-color: rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 470px) {
    position: relative;
    top: 20px;
    left: 0px;
}
`

export const ButtonLogOut = styled.button` 
    color: antiquewhite;
    letter-spacing: 3px;
    font-size: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-weight: 400;
    text-transform: capitalize;
    transition: all .3s ease-in-out;
    margin: 0px;
`


export const ButtonSignin = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  color: #222222;  
  transition: all 0.3s ease-in-out;
  
    :hover {
      border: 1px solid rgba(0, 0, 0, 0.3);     
    }

    @media screen and (max-width: 470px) {
        position: relative;
        top: 0px;
        left: 85px;
    }
`

export const ButtonSignUp = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #222222;

  :hover {
  background-color: rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 470px) {
    position: relative;
    top: 0px;
    left: 85px;
}
`

export const ButtonConfirmedLoanBook = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #222222;

  :hover {
  background-color: rgba(0, 0, 0, 0.3);
  
}
`

export const ButtonCancelLoanBook = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
  background-color: rgba(0, 0, 0, 0.3);
  color: #222;  
}
`



