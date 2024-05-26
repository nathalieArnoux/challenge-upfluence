import "./App.css";
import handleNewPost from "../../utils/handleNewPost";
import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import PunchCard from "../PunchCard/PunchCard";

function App() {
  // state
  // stores the counts of each type of post
  const [postCounts, setPostCounts] = useState({
    total: 0,
    pin: 0,
    instagram_media: 0,
    youtube_video: 0,
    article: 0,
    tweet: 0,
    facebook_status: 0,
    tiktok_video: 0,
    twitch_stream: 0,
  });
  // stores the type, day and hour of each post to pass to the punch card
  const [counts, setCounts] = useState({
    pin: {},
    instagram_media: {},
    youtube_video: {},
    article: {},
    tweet: {},
    facebook_status: {},
    tiktok_video: {},
    twitch_stream: {},
  });

  // properties
  // get a simple array of all count numbers, finds the highest and stores it
  const maxCount = Math.max(
    ...Object.values(counts).flatMap((typeCounts) => Object.values(typeCounts)),
  );

  // connecting to SSE stream
  useEffect(() => {
    const evtSource = new EventSource("https://stream.upfluence.co/stream");
    evtSource.onmessage = (evt) => {
      // parse received JSON to object
      const postData = JSON.parse(evt.data);
      handleNewPost(postData, setCounts, setPostCounts);
    };
    // clean up
    return () => evtSource.close();
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="title">Social Posts Visualization</h1>
      </header>
      <main>
        <Counter postCounts={postCounts} />
        <PunchCard counts={counts} maxCount={maxCount} />
      </main>
      <footer>
        <p className="footer">Nathalie Arnoux - 2024</p>
      </footer>
    </div>
  );
}

export default App;
