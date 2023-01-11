import './Zodiac.css';
import zodiacBackground from './zodiacBackground.png';

export default function ZodiacCard(props) {
  return (
    <div className="zodiac" style={{ backgroundImage: `url(${zodiacBackground})` }}>
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`} />
      <h2> {props.name}</h2>
      <span>{props.dates}</span>
    </div>
  );
}
