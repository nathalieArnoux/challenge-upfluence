import "./Counter.css";
import PropTypes from "prop-types";

const Counter = ({ postCounts }) => {
  return (
    <>
      <section className="counters">
        <h2>Total Posts: {postCounts.total}</h2>
        <ul className="counters-type">
          <li>
            <h3>Pin: {postCounts.pin}</h3>
            <div className="counter-dot pin"></div>
          </li>
          <li>
            <h3>Instagram Media: {postCounts.instagram_media}</h3>
            <div className="counter-dot instagram_media"></div>
          </li>
          <li>
            <h3>YouTube Video: {postCounts.youtube_video}</h3>
            <div className="counter-dot youtube_video"></div>
          </li>
          <li>
            <h3>Article: {postCounts.article}</h3>
            <div className="counter-dot article"></div>
          </li>
          <li>
            <h3>Tweet: {postCounts.tweet}</h3>
            <div className="counter-dot tweet"></div>
          </li>
          <li>
            <h3>Facebook Status: {postCounts.facebook_status}</h3>
            <div className="counter-dot facebook_status"></div>
          </li>
          <li>
            <h3>Tiktok Video: {postCounts.tiktok_video}</h3>
            <div className="counter-dot tiktok_video"></div>
          </li>
          <li>
            <h3>Twitch Stream: {postCounts.twitch_stream}</h3>
            <div className="counter-dot twitch_stream"></div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Counter;

Counter.propTypes = {
  postCounts: PropTypes.object,
};
