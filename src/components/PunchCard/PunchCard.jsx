import "./PunchCard.css";
import PropTypes from "prop-types";

const PunchCard = ({ data }) => {
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
  // saves count for each day-hour pair key
  const counts = {};
  data.forEach(({ day, hour }) => {
    const key = `${day}-${hour}`;
    counts[key] = (counts[key] || 0) + 1;
  });

  // checks all counts for each day-hour, and saves the highest one
  const maxCount = Math.max(...Object.values(counts));

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
          {hours.map((hour) => {
            // gets the count of the current day-hour pair (else 0)
            const count = counts[`${dayIndex}-${hour}`] || 0;
            // adapts dot size based on ratio between current count and maxCount (else 0)
            // multiplies by 20 to display a dot of max size = 20px
            const size = count ? (count / maxCount) * 20 : 0;
            return (
              <div key={hour} className="grid-hour-of-day">
                <div
                  className="grid-dot"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default PunchCard;

PunchCard.propTypes = {
  data: PropTypes.array,
};
