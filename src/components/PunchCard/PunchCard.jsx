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
    <section className="grid-container mx-auto grid w-fit grid-rows-[75px_repeat(7,_100px)] gap-[1px] px-[10px]">
      <div className="grid-hours col-span-1 flex h-[75px] place-content-center self-end border-r border-gray-300">
        <div className="grid-empty w-[100px] border-none bg-transparent"></div>
        {hours.map((hour) => (
          <div
            className="grid-hour w-[60px] place-content-center border border-gray-300 bg-[#e9e9e9] text-center"
            key={hour}
          >
            {hour}:00
          </div>
        ))}
      </div>

      {days.map((day, dayIndex) => (
        <div
          key={day}
          className="grid-days flex border border-gray-300 text-center"
        >
          <div className="grid-day w-[100px] place-content-center border border-gray-300 bg-[#e9e9e9] font-bold">
            {day}
          </div>
          {hours.map((hour) => (
            <div
              key={`${day}-${hour}`}
              className="grid-dots grid w-[60px] grid-cols-[repeat(2,_25px)] grid-rows-[repeat(4,_25px)] place-content-center place-items-center border border-gray-300 bg-[#fafdff]"
            >
              {Object.keys(counts).map((type) => {
                // gets the count of the current day-hour pair (else 0)
                const count = counts[type][`${dayIndex}-${hour}`] || 0;
                // adapts dot size based on ratio between current count and maxCount (else 0)
                // multiplies by 20 to display a dot of max size = 20px
                const size = count ? (count / maxCount) * 20 : 0;
                return (
                  <div
                    key={type}
                    className={`grid-dot ${type} bg-${type} rounded-full border border-gray-300`}
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
