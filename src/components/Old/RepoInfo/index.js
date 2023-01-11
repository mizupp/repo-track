import React from 'react'
// import './style.css'

export default function RepoInfo({repo}) {

    function ConvertTime(jsonTime){
        const DateTime = new Date(jsonTime);
        const options = {
            date:{
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            },
            time:{
                timeZoneName:"short", 
                timeZone: "UTC"
            }}
        return `${DateTime.toLocaleDateString('en-GB', options.date)} ${DateTime.toLocaleTimeString('en-GB', options.time)}`
    }

    const renderRepo = () => {
        return (
            <>
                <p><a href={repo.html_url}>{repo.name}</a></p>
                <p>{repo.description}</p>
                <p>Forks Count: {repo.forks}</p>
                <p>Stargazers Count: {repo.stargazers_count}</p>
                <p>Watchers Count: {repo.watchers_count}</p>
                <p>Last Updated: {ConvertTime(repo.updated_at)}</p>
                <p>Created at: {ConvertTime(repo.created_at)}</p>
            </>
        )
    }

        return (
            <div style={{color: "white"}}>
                {repo.id? renderRepo() : <p>{repo}</p>}
            </div>
        )
}
