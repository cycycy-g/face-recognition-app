import React from 'react';
import githubLogo from './github.png';

const Navigation = ({onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex'}}>
                <a href="https://github.com/galoncyryll/face-recognition-app"style={{marginTop: '35px', marginRight: 'auto', paddingLeft:'2rem'}} ><img style={{width: '40px', height: '40px'}}alt='Logo' src={githubLogo} /></a>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex'}}>
                <a href="https://github.com/galoncyryll/face-recognition-app"style={{marginTop: '35px', marginRight: 'auto', paddingLeft:'2rem'}} ><img style={{width: '40px', height: '40px'}}alt='Logo' src={githubLogo} /></a>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }     
}

export default Navigation;