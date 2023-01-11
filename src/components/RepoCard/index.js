import React from 'react'
// import RepoItem from '../RepoItem'
import { useNavigate } from 'react-router-dom'
import { useState} from "react";

import "./styles.css";

export default function RepoCard({repo}) {

    const [star, setStar] = useState(false);
    const [list, setList] = useState(false);


    const HandleClick = () => {
        setStar(!star);
    }

    const HandleDropClick = () => {
        setList(!list);
    }

    return (
        <div className='RepoCard'>
            <div className="leftSection">
                <div className='Title'>
                    <a href={repo.html_url}><h3>{repo.name}</h3></a>
                    <p className='visibility'>{repo.visibility}</p>
                </div>
                <p className='Updated'>Updated on {repo.updated_at}</p>
                {
                repo.forks ? <p className= "forks">Forks: {repo.forks}</p> : null
                }
            </div>
            <div className="rightSection">
                <div className='starButton'>
                    <div className='star' onClick={HandleClick}>
                        {!star ? <img src="https://www.svgrepo.com/show/476479/star.svg" alt="star"/> : <img src="https://www.svgrepo.com/show/475275/star.svg" alt="star"/> }
                        {!star ? <span>Star</span> : <span>Starred</span>}
                    </div>

                    {/* ⭐ */}
                    
                    <div onClick={HandleDropClick} className='starDrop'>
                        <img src='https://www.svgrepo.com/show/446816/triangle-down.svg'/>
                    </div>
                </div>
                {
                list ? <div className='suggestedLists'> <h3>Suggested lists</h3> <div className='list'> <div><input type="checkbox" name="Future Ideas"/><label htmlFor="Future Ideas">🔮 Future Ideas</label></div><div><input type="checkbox" name="My stack"/><label htmlFor="My stack">🚀 My stack</label></div><div><input type="checkbox" name="Inspiration"/><label htmlFor="Inspiration">✨ Inspiration</label></div></div><p>➕ Create list</p></div> : null
                }       
            </div>
            
            
        </div>
    )

}