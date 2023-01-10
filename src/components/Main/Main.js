import React from 'react';
import './Main.css';
import zodiacMountain from './zodiacMountain.jpg';

export default function Main() {
  return <main className="background" style={{ backgroundImage: `url(${zodiacMountain})` }}></main>;
}
