import memesData from "./memesData";
import { useState } from "react";
export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function textChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <div className="flex flex-col justify-center m-9">
      <div className="flex flex-row justify-center" action="">
        <input
          className="pr-12 my-4 mr-2 border rounded"
          type="text"
          name="topText"
          value={meme.topText}
          placeholder="Top text"
          onChange={textChange}
        />
        <input
          className="pr-12 my-4 ml-2 border rounded"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          placeholder="Bottom text"
          onChange={textChange}
        />
      </div>
      <button
        onClick={getMemeImage}
        className="px-40 py-3 mb-6 text-sm text-white rounded bg-gradient-to-r from-purple-900 to-fuchsia-800 "
        type="submit"
      >
        Get a new meme image🖼
      </button>
      <div className="relative content-center w-full">
        <img src={meme.randomImage} alt="" className="meme-image " />
        <h2 className="top-0 meme-text">{meme.topText}</h2>
        <h2 className="bottom-0 meme-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
