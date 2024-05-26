import "./App.css";
import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
// import PunchCard from "../PunchCard/PunchCard";

function App() {
  // state
  // initials values to store the type, day and hour of each post
  const initialCounts = {
    pin: {},
    instagram_media: {},
    youtube_video: {},
    article: {},
    tweet: {},
    facebook_status: {},
    tiktok_video: {},
    twitch_stream: {},
  };
  // initial values used to store the counts of each type of post
  const initialPostCounts = {
    total: 0,
    pin: 0,
    instagram_media: 0,
    youtube_video: 0,
    article: 0,
    tweet: 0,
    facebook_status: 0,
    tiktok_video: 0,
    twitch_stream: 0,
  };
  const [counts, setCounts] = useState(initialCounts);
  const [postCounts, setPostCounts] = useState(initialPostCounts);

  // properties
  const maxCount = Math.max(
    ...Object.values(counts).flatMap((typeCounts) => Object.values(typeCounts)),
  );

  // method(s)
  const handleNewPost = (postData, setCounts, setPostCounts) => {
    const [type, details] = Object.entries(postData)[0];
    const date = new Date(details.timestamp * 1000); // convert to milliseconds
    const day = date.getUTCDay();
    const hour = date.getUTCHours();
    const key = `${day}-${hour}`;

    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      console.log(newCounts);
      // Ensure the key exists in the type or add it
      if (!newCounts[type][key]) {
        newCounts[type][key] = 0;
      }
      newCounts[type][key]++; // adds one to the current key
      return newCounts; // returns the new values to store in the state
    });

    setPostCounts((prevPostCounts) => {
      const newPostCounts = { ...prevPostCounts };
      newPostCounts.total++; // adds one to total
      newPostCounts[type]++; // adds one to the current type
      return newPostCounts; // returns the new values to store in the state
    });
  };

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
        {/* <PunchCard /> */}
      </main>
      <footer>
        <p className="footer">Nathalie Arnoux - 2024</p>
      </footer>
    </div>
  );
}

export default App;
