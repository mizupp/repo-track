import axios from "axios";

const loading = () => {
    return {
        type: "LOADING",
    }
}

const loadedResult = (data) => {
    return {
        type: "LOAD_RESULT",
        payload: data
    }
}

const setError = (err) => {
    return {
        type: "SET_ERROR",
        payload: err
    }
};


const getResult = (searchTerm) => {

    return async dispatch => {

        dispatch(loading());

        try{
            const data = await axios.get(`https://api.github.com/users/${searchTerm}/repos`);
            dispatch(loadedResult(data.data))
        }
        catch(err){
            console.warn(err)
            dispatch(setError(err))
        }
    }
}

export default getResult;


