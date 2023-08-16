import "./concepts.css";
import Concept from "./concept";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      {props.concepts !== null &&
        props.concepts.map((item) => {
          return <Concept concept={item} />;
        })}
    </ul>
  );
};

export default Concepts;
