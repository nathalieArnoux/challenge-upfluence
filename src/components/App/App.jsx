import "./App.css";
import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import PunchCard from "../PunchCard/PunchCard";

function App() {
  // state(s)
  // store message type, days and hours
  const [data, setData] = useState([]);

  // method(s)
  const handleNewPost = (postData) => {
    const [type, details] = Object.entries(postData)[0];
    const date = new Date(details.timestamp * 1000); // convert to milliseconds
    const day = date.getUTCDay();
    const hour = date.getUTCHours();

    setData((prevData) => [...prevData, { type, day, hour }]);
  };

  useEffect(() => {
    const evtSource = new EventSource("https://stream.upfluence.co/stream");
    evtSource.onmessage = (evt) => {
      // parse received JSON to object
      const postData = JSON.parse(evt.data);
      handleNewPost(postData);
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
        <Counter />
        <PunchCard data={data} />
      </main>
      <footer>
        <p className="footer">Nathalie Arnoux - 2024</p>
      </footer>
    </div>
  );
}

export default App;
