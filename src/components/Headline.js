import React, { useEffect, useState } from "react";
import "./headline.css";
import axios from "./axios";
import request from "./request";

const image_url = "https://image.tmdb.org/t/p/original";
function Headline() {
  const [headimage, setHeadimage] = useState([]);
  useEffect(() => {
    async function gettingImage() {
      const info = await axios.get(request.fetchNetflixOriginal);
      // console.log(info.data.results);
      setHeadimage(
        info?.data.results[Math.floor(Math.random() * info.data.results.length)]
      );
      return info;
    }
    gettingImage();
  }, []);
  // console.log(headimage)
  // to shorten the headline description we can google this
  // it takes string and num, if the string is > the given number shorten it to that num and show it including ...
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="head"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${image_url}${headimage?.backdrop_path}")`,
        backgroundPosition: "center center",
        paddingTop:"190px",
      }}
    >
      <div className="head_contents">
        <h1 className="head_title">
          {headimage?.title || headimage?.name || headimage.original_name}
        </h1>
        <div className="head_buttons">
          <button className="head_button">Play</button>
          <button className="head_button">My List</button>
        </div>
        <h1 className="head_description">
          {truncate(headimage?.overview, 150)}
        </h1>
      </div>

      {/* to creat fading effect */}
      <div className="head_fadeBottom" />
    </div>
  );
}

export default Headline;
