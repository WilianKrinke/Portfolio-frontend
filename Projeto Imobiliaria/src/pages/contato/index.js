import React, { useState } from 'react';
import {FormSecStyled,Button} from '../styled'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Colunas from '../../assets/Colunas-Corintia-Alpha.png'

const Contato = () => {

    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        file: ''
    });
    const [doit, setDoit] = useState(true);


    const handleInputChange = (e) => {
        e.preventDefault();
            if(e.target.name === "anexo"){
                campos[e.target.name] = e.target.files[0];
            } else {
                campos[e.target.name] = e.target.value;
            }
        setCampos(campos);
    }

    const changeAndGo = (e) => {        
        e.preventDefault();
        setDoit(false)
        enviar()
        setInterval(() => {
            setDoit(true)
        }, 5000);        
    }

    const enviar = (e) => {
        const formData = new FormData();
        Object.keys(campos).forEach(key => formData.append(key, campos[key]));
        axios.post("http://localhost:3001/contato", 
              formData,
              {
                headers: {
                 "Content-Type": `application/json; charset=utf-8; boundary=${formData._boundary}`,
                }
              })
        .then(response => {console.log(response)})
        console.log('Passou por aqui')
    }

    return(        
        <FormSecStyled>
            <img className='colunaDireita' src={Colunas} alt='Colunas Corintias'></img>
            <Link to="/">Home</Link>
            <div className='divForm'>
                <div className='divInfo'>                    
                    <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at consequat est. Proin egestas pulvinar felis sit amet ultricies. Nunc a erat a leo sagittis elementum. Vivamus lorem sem, ultricies non arcu a, imperdiet consectetur dolor. Mauris finibus nibh tempus dictum ullamcorper. Nam lacinia, velit vitae finibus volutpat, lorem enim aliquam felis, sit amet commodo nisl nunc et justo. Phasellus blandit et nunc ut porttitor. Aenean convallis, nisi vel tempus dignissim, sapien neque sodales eros, ac lacinia ante metus sit amet est. Vestibulum efficitur fermentum nunc. Duis gravida maximus sem.

                            Donec sit amet bibendum lectus. Nunc tristique libero ac semper viverra. Integer vehicula convallis dui, at efficitur est. Nam vestibulum sapien a urna luctus, eu lobortis dui posuere. Proin accumsan purus ac odio pharetra, nec vulputate nibh fringilla. Praesent vel gravida erat. Nam quis nisi magna. Aliquam at neque fringilla, porta mauris ornare, iaculis neque. Vivamus condimentum accumsan diam eget condimentum. Aenean id imperdiet est. Maecenas interdum ut purus in feugiat. Donec tincidunt mattis ante, nec vestibulum neque molestie id. Maecenas in lacinia ante, eu consectetur dui. Vestibulum vel blandit diam, dignissim tincidunt mauris. Aliquam gravida quam sed quam dapibus porttitor.
                            Deixe sua mensagem.
                    </p>                    
                </div>
                <form onSubmit={changeAndGo} action="http://localhost:3001/contato" method="POST">
                    <label htmlFor="nome">Nome:</label>
                    <input name="nome" type="text" autoFocus onChange={handleInputChange}></input>
            
                    <label htmlFor="telefone">Telefone:</label>
                    <input name="telefone" type="tel" onChange={handleInputChange}></input>
            
                    <label htmlFor="email">E-mail:</label>
                    <input name="email" type="email" onChange={handleInputChange}></input>
            
                    <textarea name="mensagem" onChange={handleInputChange} placeholder="Digite sua mensagem..." resize='none'></textarea>
                    <input name="file" type="file" onChange={handleInputChange} className="file"></input>
                    <Button className='btn btn2' doit={doit}>{doit ? 'Enviar' : 'Enviado'}</Button>
                </form>
            </div>
            <div className='divContato'>
                <address>
                    <p>
                        Av. Lorem Ipsum, 1234.
                    </p>
                    <p>
                        41 99999-9999  
                    </p>
                </address>
            </div>
            <img className='colunaEsquerda' src={Colunas} alt='Colunas Corintias'></img>
        </FormSecStyled>        
    )
} 

export default Contato;

