import Axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tweet from "./tweet";

function Feed() {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user.token);
    const getTweets = async () => {
      const res = await Axios.get("http://localhost:3000", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTweets(res.data.tweets);
    };
    getTweets();
    console.log(tweets);
  }, []);

  return tweets.map((tweet) => (
    <div key={tweet.id}>
      <Tweet data={tweet}></Tweet>
    </div>
  ));
}

export default Feed;
