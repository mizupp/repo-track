import React from 'react'
import RepoItem from '../RepoItem'
import { useNavigate } from 'react-router-dom'


export default function RepoList({results, setRepo}) {
    
    const navigate = useNavigate()

    const handleClick = (key) => {
        setRepo(prev => prev = results.filter(r => r.id === key)[0])
        navigate(`/repo`)
    };

    return (
        <div style={{color: "white"}}>
            { results.map(r => <RepoItem key={r.id} Name={r.name} URL={r.html_url} onClick={() => handleClick(r.id)}/>) }
        </div>
    )
}
