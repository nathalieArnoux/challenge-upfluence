import { useEffect, useState } from "react";

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

  console.log(data);

  return (
    <>
      {/*
      header
      main
        punchCard
      footer 
      */}
    </>
  );
}

export default App;
