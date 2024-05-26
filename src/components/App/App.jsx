function App() {
  const evtSource = new EventSource("https://stream.upfluence.co/stream");
  evtSource.onmessage = (evt) => {
    // parse received JSON to object
    const data = JSON.parse(evt.data);
    console.log(data);
  };

  return <></>;
}

export default App;
