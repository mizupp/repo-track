import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import  getResult  from '../../actions';
import { Logo, SearchBar, RepoCard, Profile } from '../../components'
import "./styles.css"

const Welcome = () => {
    <h1>Welcome</h1>
    // const dispatch = useDispatch();
// const search = searchTerm => dispatch(getResult(searchTerm))

    const repositories = useSelector(state => state.results);
    const owner = useSelector(state => state.results[0]?.owner ?? state.results);
    console.log(owner)
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    console.log(repositories);
   

return (
    <div className='home'>
        <div id="searchside"> <SearchBar /> </div> 
        <div id="userside"> <Profile owner={owner}/> </div>
        <div id="reposide" className="repositories">
            {repositories.map((repo, i) => {
                return <RepoCard key={i} repo={repo}/>
            })}
        </div>
    </div>
)
}

export default Welcome;