import React, {useState} from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './style.css';

export default function Form({getResult}) {

    const USR = useSelector(state => state.username);

    const navigate = useNavigate()

    const [ username, setUsername ] = useState(USR)
    const error = useSelector(state => state.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            getResult(username);
            setUsername("");
            navigate(`/dashboard`)
        } catch (err) {
            console.log(err);
            alert("user not found")
        }
    }

    const handleChange = (e) => {
        setUsername(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>GitHub username:
                <br />
                <input type="text" value={username} onChange={handleChange} />
            </label>
            {error? <p>user not found</p> : <></>}
            <input type="submit" value="Submit" />
        </form>
    );
}


