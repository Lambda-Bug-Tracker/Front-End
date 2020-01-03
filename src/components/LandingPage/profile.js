import React from "react";

export default function ProfilePic(props) {
    return(
        <div className='profile-pic'>
            <img src={props.data.image} alt={props.data.name} />
            <div className='overlay'>
                <h4>{props.data.name}</h4>
                <p>{props.data.snip}</p>
                <div className='social-icons'>
                    <ion-icon className='logo-github' name="logo-github"></ion-icon>
                    <ion-icon className='logo-linkedin' name="logo-linkedin"></ion-icon>
                    <ion-icon className='logo-twitter' name="logo-twitter"></ion-icon>
                    <i class="fab fa-dev"></i>
                </div>
            </div>
        </div>
    )
}