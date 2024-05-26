import "./PunchCard.css";
import PropTypes from "prop-types";

const PunchCard = ({ counts, maxCount }) => {
  // properties
  // creates an array of length = 24 (for each hour) and fill it with its own keys
  const hours = [...Array(24).keys()];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <section className="grid-container">
      <div className="grid-hours">
        <div className="grid-empty"></div>
        {hours.map((hour) => (
          <div className="grid-hour" key={hour}>
            {hour}:00
          </div>
        ))}
      </div>

      {days.map((day, dayIndex) => (
        <div key={day} className="grid-days">
          <div className="grid-day">{day}</div>
          {hours.map((hour) => (
            <div key={`${day}-${hour}`} className="grid-dots">
              {Object.keys(counts).map((type) => {
                // gets the count of the current day-hour pair (else 0)
                const count = counts[type][`${dayIndex}-${hour}`] || 0;
                // adapts dot size based on ratio between current count and maxCount (else 0)
                // multiplies by 20 to display a dot of max size = 20px
                const size = count ? (count / maxCount) * 20 : 0;
                return (
                  <div
                    key={type}
                    className={`grid-dot ${type}`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default PunchCard;

PunchCard.propTypes = {
  counts: PropTypes.object,
  maxCount: PropTypes.number,
};
