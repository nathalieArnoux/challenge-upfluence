const handleNewPost = (postData, setCounts, setPostCounts) => {
  const [type, details] = Object.entries(postData)[0];
  const date = new Date(details.timestamp * 1000); // convert to milliseconds
  const day = date.getUTCDay();
  const hour = date.getUTCHours();
  const key = `${day}-${hour}`;

  setCounts((prevCounts) => {
    const newCounts = { ...prevCounts };
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

export default handleNewPost;
