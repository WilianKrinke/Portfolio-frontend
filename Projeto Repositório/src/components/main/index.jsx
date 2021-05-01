import React, { Fragment, useState, useCallback, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {MainStyled, Form, SubmitButton,List} from '../styleds'
import api from '../../services/api'

const Main = () => {

    const [newRepo, setnewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(true)
    const [double, setDouble] = useState(false)

    //DIDMOUNT, Buscar
    useEffect(() => {
        const repoStore = localStorage.getItem('repos')
        if (repoStore) {
            setRepositorios(JSON.parse(repoStore))
        } 
    }, [])

    //DIDUPDATE, Salvar Alterações
    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repositorios))
    }, [repositorios])


    function handleinputChange(e){
        setDouble(false)
        setnewRepo(e.target.value)
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        async function submit() {
            setLoading(true)
            try {
                if (newRepo === '') {
                    setAlert(false)
                } else {
                    const response = await api.get(`repos/${newRepo}`)
                    const hasRepo = repositorios.find(repo => repo.name === newRepo)
                    
                    if (hasRepo) {
                        setDouble(true)
                        throw new Error('Repositorio Duplicado');                        
                    }
                    const data = {
                        name: response.data.full_name,
                    }
                    setAlert(true)
                    setRepositorios([...repositorios, data])
                    setnewRepo('');
                }
                
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        submit()
    }, [newRepo, repositorios]);


    const handleDelete = useCallback((repo) => {        
        const find = repositorios.filter(re => re.name !== repo)
        setRepositorios(find)
    }, [repositorios])


    return (
        <Fragment>
            <MainStyled>
                <div className="containerrep">
                    <i class="fab fa-github"></i>
                    <h1> Meus Repositorios </h1>                    
                </div>              

                <Form onSubmit={handleSubmit} error={double}>
                    <input type="text" value={newRepo} placeholder="Adicionar Repositorios..." 
                            onChange={handleinputChange} />
                    <SubmitButton Loading={loading ? 1 : 0}>
                        <i class="fas fa-plus-circle"></i>
                    </SubmitButton>
                </Form>

                {!alert ? 
                    <div className="containeralert">
                        <span>Preencha o Campo</span>
                    </div>
                :
                    <div className="containerlist">
                        <List>
                            {repositorios.map(itemrepo => (
                                <li key={itemrepo.name}>
                                        <i class="fas fa-trash-alt" onClick={() => handleDelete(itemrepo.name)}></i>
                                    <span> 
                                        {itemrepo.name}
                                    </span>
                                    <Link to={`/repositorio/${encodeURIComponent(itemrepo.name)}`}>
                                        <i class="fas fa-bars"></i>
                                    </Link>                                
                                </li>
                            ))}
                        </List>
                    </div>
                }
                            
            </MainStyled>
        </Fragment>
    );
}

export default Main;
