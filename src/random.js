import React from 'react'
export default function Random({min, max}) {
  return (
    <p>Random value between {min} and {max} => {Math.floor(Math.random() * max) + min}</p>
  );
}