import React from 'react';
import { zodiacs } from '../../zodiac.js';
import ZodiacCard from '../Zodiac/Zodiac.js';
import './Main.css';
import zodiacMountain from './zodiacMountain.jpg';

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${zodiacMountain})` }}>
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.id} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  );
}
