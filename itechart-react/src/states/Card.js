import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h1> {props.title} </h1>
      </div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Card;
