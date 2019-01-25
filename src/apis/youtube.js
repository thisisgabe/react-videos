import axios from "axios";

const KEY = "AIzaSyC3Pa97LGekJjhrIqej0BuLyloPdZHuY5I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
