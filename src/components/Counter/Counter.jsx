import "./Counter.css";
import PropTypes from "prop-types";

const Counter = ({ postCounts }) => {
  return (
    <>
      <section className="counter">
        <h2>Total Posts: {postCounts.total}</h2>
      </section>
    </>
  );
};

export default Counter;

Counter.propTypes = {
  postCounts: PropTypes.object,
};
