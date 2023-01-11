import React, { useEffect } from "react"; 
import {useSelector, useDispatch} from "react-redux"
import { SearchBar } from '../../components';
import getResult from '../../actions';

const Search = () => {

    const user = useSelector(state => state.user);
    const result = useSelector(state => state.result)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error);
    const dispatch = useDispatch()
    
    const renderResult = () => {
           return loading ? <p>Loading...</p> : <Result result={result} />
        }
    
        const search = searchTerm => dispatch(getResult(searchTerm));
        // useEffect(() => { search("mizupp")}, [getResult])

    return (
        <>
        <div id="search">
            Where do you want to search?
            <SearchBar getResult={search} />
                <h1> {user} </h1>
            {/* {error? <p role="alert">Opps{error}</p>: renderResult()} */}
            { error ? <p role="alert"> Oops there's been an error! {error} </p> : renderResult() }
    
    
        </div>
        </>
    );
}

export default Search;