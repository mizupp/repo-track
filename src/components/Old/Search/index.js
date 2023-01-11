import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Search({setRepo}) {
    const results = useSelector(state => state.results);

    const dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        dispatch({ type: 'SORT', payload: e.target.value })
        setRepo(results[0])
    }

    return (
        <label> Sort by
            <select onChange={handleChange}>
                <option value="none">Name</option>
                <option value="created_at">{"Created (old-recent)"}</option>
                <option value="stargazers_count"> Stargazers count</option>
                <option value="watchers_count"> Watchers count</option>
            </select>
        </label>
    )
}
