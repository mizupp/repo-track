import React from "react";

import './styles.css'
export default function Profile({owner}) {
    return(

    <>
    <div id="profilecard"> 
    <div id="userprofile">
    <img  id="useravatar" src={owner.avatar_url} ></img>
    <a id="username" href={owner.html_url}>{owner.login} </a>
        {/* <p> events {owner.events_url} </p> */}
        <button id="editp">Edit Profile</button>
        <div id="followlink">
        {/* <div className='followers'></div> */}
        
        <img className='followers' src="https://www.svgrepo.com/show/435685/group.svg" alt="followers"/>
        <span><a href={owner.followers_url}>Followers</a><a href={owner.following_url}>Following</a></span>
    
        </div>
    </div>

    {/* <div id="userachievements">
        <p> id {owner.gists_url} </p>
    </div>
    <div id="usersorganisations">
    <img src={owner.avatar_url} ></img>
        <p> id {owner.organizations_url} </p>
    </div> */}


    </div>

    </>
    );

}
