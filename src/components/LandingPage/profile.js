import React from "react";

export default function ProfilePic(props) {
    return(
        <div className='profile-pic'>
            <img src={props.data.image} alt={props.data.name} />
            <div className='overlay'>
                <h4>{props.data.name}</h4>
                <p>{props.data.snip}</p>
                <div className='social-icons'>
                    <a href={props.data.github}><ion-icon className='logo-github' name="logo-github"></ion-icon></a>
                    <a href={props.data.linkedin}><ion-icon className='logo-linkedin' name="logo-linkedin"></ion-icon></a>
                    <a href={props.data.twitter}><ion-icon className='logo-twitter' name="logo-twitter"></ion-icon></a>
                    <i class="fab fa-dev"></i>
                </div>
            </div>
        </div>
    )
}