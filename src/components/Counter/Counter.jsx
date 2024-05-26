import PropTypes from "prop-types";

const Counter = ({ postCounts }) => {
  return (
    <>
      <section className="m-[6px] mx-auto flex w-[1540px] justify-evenly border border-gray-300 bg-white p-[3px]">
        <h2>Total Posts: {postCounts.total}</h2>
        <ul className="flex w-4/5 justify-evenly">
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>Pin: {postCounts.pin}</h3>
            <div className="bg-pin h-4 w-4 rounded-full"></div>
          </li>
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>Instagram Media: {postCounts.instagram_media}</h3>
            <div className="bg-instagram_media h-4 w-4 rounded-full"></div>
          </li>
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>YouTube Video: {postCounts.youtube_video}</h3>
            <div className="bg-youtube_video h-4 w-4 rounded-full"></div>
          </li>
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>Article: {postCounts.article}</h3>
            <div className="bg-article h-4 w-4 rounded-full"></div>
          </li>
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>Tweet: {postCounts.tweet}</h3>
            <div className="bg-tweet h-4 w-4 rounded-full"></div>
          </li>
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>Facebook Status: {postCounts.facebook_status}</h3>
            <div className="bg-facebook_status h-4 w-4 rounded-full"></div>
          </li>
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>Tiktok Video: {postCounts.tiktok_video}</h3>
            <div className="bg-tiktok_video h-4 w-4 rounded-full"></div>
          </li>
          <li className="flex flex-row-reverse items-center justify-end gap-2">
            <h3>Twitch Stream: {postCounts.twitch_stream}</h3>
            <div className="bg-twitch_stream h-4 w-4 rounded-full"></div>
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
