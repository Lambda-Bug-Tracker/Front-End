import React from "react";
import { Link } from 'react-router-dom';
import Profile from './profile';

import '../../assets/css/landing.css';
import lambdaBanner from '../../assets/img/lambda-banner.png'
import bugFixing from '../../assets/img/undraw_bug_fixing_oc7a.svg';
import devActivity from '../../assets/img/undraw_developer_activity_bv83.svg';

import aaron from '../../assets/img/aaron.png';
import brianna from '../../assets/img/brianna.png';
import chris from '../../assets/img/chris.png';
import emily from '../../assets/img/emily.png';
import jimmy from '../../assets/img/jimmy.png';
import joscelyn from '../../assets/img/joscelyn.png';
import tommy from '../../assets/img/tommy.png';
import robert from '../../assets/img/robert.png';

const team1 = [
  {
    image: chris,
    name: 'Christopher Adams'
  },
  {
    image: joscelyn,
    name: 'Joscelyn Owen'
  },
  {
    image: emily,
    name: 'Emily Bruner'
  },
  {
    image: robert,
    name: 'Robert Gordon'
  },
]

const team2 = [
  {
    image: aaron,
    name: 'Aaron Soler'
  },
  {
    image: brianna,
    name: 'Brianna Keune'
  },
  {
    image: tommy,
    name: 'Tommy Kindle'
  },
  {
    image: jimmy,
    name: 'Jimmy McBride'
  },
]

export default function LandingPage() {
  return (
    <div className='landing'>
      <header>
        <div className='row'>
          <nav>
            <a href='#'><img src={lambdaBanner} alt='lambda school logo'/></a>
            <ul>
              <li><a href='#features'>Features</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#team'>Team</a></li>
            </ul>
            <div className='auth'>
              <Link className='register' to='/register'>Register</Link>
              <Link className='login' to='login'>Login<ion-icon name="arrow-round-forward"></ion-icon></Link>
            </div>
          </nav>
          <div className='hero'>
            <div className='hero-title'>
              <h1>Bug Tracker</h1>
              <p>Keep track of those pesky bugs as you <br/> collaborate with your team.</p>
              <a href='/login'>Get started</a>
            </div>
            <img src={bugFixing} alt='bug fixing'/>
          </div>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0 0,100 0,100 100,0 100" />
        </svg>
      </header>
      <section id='features' className='about-features'>
        <div className='row'>
          <div className='text-container'>
            <h2>Organized Solutions</h2>
            <p>With our feature set you and your team can create <br/> efficient and effective solutions</p>
          </div>
          <div className='feature-container'>
            <div className='feature-item'>
              <ion-icon name="warning"></ion-icon>
              <h3>Label</h3>
              <p>Prioritize your bugs and label them appropriately. Label bugs that need immediate attention or something that can be taken care of later.</p>
            </div>
            <div className='feature-item'>
              <ion-icon name="train"></ion-icon>
              <h3>Track</h3>
              <p>Keep track and take note of current bugs that are present in your projects. First step to solving any problem is identifying one.</p>
            </div>
            <div className='feature-item'>
              <ion-icon name="people"></ion-icon>
              <h3>Collaborate</h3>
              <p>Keep your team on the same page with our board view of all current bugs. Work together to create effective and efficient solutions.</p>
            </div>
          </div>
          <div className='about-container'>
            <div id='about' className='about-info'>
              <h2>About Bug Tracker</h2>
              <p>Bug tracker was built to help teams maintain an effective workflow when dealing with pesky bugs. Develop with confidence as you identify problems and collaborate with your team to get features in working order.</p>
              <a href='/login'>Get started</a>
            </div>
            <img src={devActivity} alt='github activity' />
          </div>
        </div>
      </section>
      <section id='team' className='team'>
        <h2>Our Team</h2>
        <div className='team-row-1'>
          {team1.map(element => <Profile data={element} />)}
        </div>
        <div className='team-row-2'>
          {team2.map(element => <Profile data={element} />)}
        </div>
      </section>
      <footer>Copyright © 2019 Lambda School - All rights reserved</footer>
    </div>
  );
}