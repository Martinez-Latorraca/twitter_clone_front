import Axios from "axios";
import { useEffect, useState } from "react";

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const res = await Axios.get("http://localhost:3000");
      setTweets(res.data);
    };
    console.log(tweets);
    getTweets();
  }, [tweets]);

  return <div>Feed</div>;
}

export default Feed;
