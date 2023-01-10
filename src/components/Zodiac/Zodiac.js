import './Zodiac.css';
export default function ZodiacCard(props) {
  return (
    <div className="zodiac">
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`} />
      <h2> {props.name}</h2>
      <span>{props.dates}</span>
    </div>
  );
}
