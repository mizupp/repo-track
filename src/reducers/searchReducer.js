const initState = {
    results: [],
    loading: false,
    error: false
}

// results: [{
//     id: "",
//     name: "",
//     forks: 0,
//     stargazers_count: 0,
//     watchers_count: 0,
//     updated_at: "",
//     created_at: "",
//     html_url: "",
//     description: "test"
// }],
const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
         }
        case 'LOAD_RESULT':
            return {
                ...state,
                loading: false,
                results: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
        }
        default:
            return state
    }
}

export default searchReducer;

// const initState = {
//     username: "example",
//     userIconURL: "https://avatars.githubusercontent.com/u/57936?v=4",
//     results: [{
//         id: "43186424",
//         name: "me",
//         forks: 0,
//         stargazers_count: 0,
//         watchers_count: 0,
//         updated_at: "2022-10-30T16:35:13Z",
//         created_at: "2009-02-25T19:02:12Z",
//         html_url: "https://github.com/example/test",
//         description: "test"
//     }],
//     loading: false,
//     error: false
// };

// function sort(data,type){
//     switch (type){
//         case 'stargazers_count':
//             return (data.sort((a,b) => {
//                 if(a.stargazers_count > b.stargazers_count){return -1}
//                 else if (a.stargazers_count < b.stargazers_count){return 1}
//                 else {return 0}}))
//         case 'watchers_count':
//             return (data.sort((a,b) => {
//                 if(a.watchers_count > b.watchers_count){return -1}
//                 else if (a.watchers_count < b.watchers_count){return 1}
//                 else {return 0}}))
//         case 'created_at':
//             return (data.sort((a,b) => {
//                 if(new Date(a.created_at).getTime() > new Date(b.created_at).getTime()){return 1}
//                 else if (new Date(a.created_at).getTime() < new Date(b.created_at).getTime()){return -1}
//                 else {return 0}}))
//         default:
//             return (data.sort((a,b) => {
//                 if(a.name.toLowerCase() > b.name.toLowerCase()){return 1}
//                 else if (a.name.toLowerCase() < b.name.toLowerCase()){return -1}
//                 else {return 0}}))
//     }
// }

// const searchReducer = (state=initState, action) => {
//     switch(action.type){
//         case 'LOADING':
//             return { ...state, loading: true };
//         case 'LOAD_RESULT':
//             return { ...state, 
//                 username: action.payload.userInfo.username, 
//                 userIconURL: action.payload.userInfo.userIconURL,
//                 results: action.payload.results, 
//                 loading: false, 
//                 error: false };
//         case 'SET_ERROR':
//             return { ...state, error: action.payload, loading: false }
//         case 'SORT':
//             return { ...state,
//             results: sort(state.results, action.payload)
//             }
//         default:
//             return state;
//     };
// };

// export default searchReducer;
        