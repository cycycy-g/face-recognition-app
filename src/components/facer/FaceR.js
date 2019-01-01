import React from 'react';
import './FaceR.css';

const FaceR = ({ imageUrl, box }) =>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.btmRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceR;