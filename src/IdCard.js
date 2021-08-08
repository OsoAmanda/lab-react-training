import React from 'react';

export default function IdCard({lastName, firstName, gender, height, birth, picture}){
  return (
    <div className='card-container' >
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender} </p>
        <p><strong>Height:</strong> {height/100} m</p>
        <p><strong>Birth:</strong> {birth.toDateString()} </p>
      </div>
    </div>
  );
};




