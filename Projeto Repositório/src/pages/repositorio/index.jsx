import React, {useEffect, useState} from 'react';
import {Container} from './styleds'
import api from '../../services/api'
import {Owner, Loading, BackBtn,IssuesStyled,PageActions,FilterList} from './styleds'
import { Link } from 'react-router-dom';

// {decodeURIComponent(match.params.repositorio)}

const Repositorio = ({match}) => {

    const [repos, setRepos] = useState({})
    const [issues, setIssues] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    // eslint-disable-next-line
    const [stateofssue, setStateIssue] = useState([
        {state: 'open', label: 'Abertas', active: false},
        {state: 'closed', label: 'Fechadas', active: false},
        {state: 'all', label: 'Todas', active: true},
        
    ])
    const [filterindex, setFilterIndex] = useState(0)


    useEffect(() => {
        async function Load() {
            const nomeRepo = decodeURIComponent(match.params.repositorio);
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`), 
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: stateofssue.find(f => f.active).state,
                        per_page: 5
                    }
                })
            ])
            setRepos(repositorioData.data)
            setIssues(issuesData.data)
            setLoading(false)
        };
        Load()
        
    }, [match.params.repositorio, stateofssue]);

    
    useEffect(() => {
        async function loadIssue() {
            const nomeRepo = decodeURIComponent(match.params.repositorio);
            const response = await api.get(`/repos/${nomeRepo}/issues`, {
                params: {
                    state: stateofssue[filterindex].state,
                    page,
                    per_page: 5
                }
            })

            setIssues(response.data)
        }
        loadIssue()
        
    }, [match.params.repositorio,page,stateofssue,filterindex]);

    function handleFilter(index) {
        setFilterIndex(index)
    }  

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1)
    }
    
    if (loading) {
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }

    return (
        <Container>
            <BackBtn>
                <Link to="/">
                    <i class="fas fa-arrow-left"></i>
                </Link>
            </BackBtn>
            <Owner>
                <img src={repos.owner.avatar_url} alt={repos.owner.login}/>
                <h1>{repos.name}</h1>
                <p>{repos.description}</p>
            </Owner>

            <FilterList className="divselect" active={filterindex}>
                <div>
                    <p>Selecione a Situação das issues:</p>
                </div>
                <div className="divbtns">
                    {stateofssue.map((filter, index) => {
                        return(
                            <button type='button' key={filter.label}
                                    onClick={() => handleFilter(index)} >
                                {filter.label}
                            </button>
                        )

                    })}
                </div>
            </FilterList>

            <IssuesStyled>
            
                {issues.map(issue => {
                    return(
                        <li key={String(issue.id)}>
                            <img src={issue.user.avatar_url} alt={issue.user.login} />


                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>

                                    {issue.labels.map(label => {
                                        return(
                                            <span key={String(label.id)}>{label.name}</span>
                                        )
                                    })}
                                </strong>

                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    )
                })}
            </IssuesStyled>

            <PageActions>
                <button 
                type='button' 
                onClick={() => handlePage('back')}
                disabled={page < 2}
                >
                    Voltar
                </button>
                <button type='button' onClick={() => handlePage('next')}>
                    Avançar
                </button>   
            </PageActions>
        </Container>
    );
}

export default Repositorio;
