import memesData from "./memesData";
import { useState } from "react";
export default function Meme() {
  const [memeImg, setMeme] = useState("");
  function newMeme() {
    const { memes } = memesData.data;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const { url } = memes[randomNumber];
    setMeme(url);
  }

  return (
    <div className="flex flex-col justify-center m-9">
      <div className="flex flex-row justify-center" action="">
        <input
          className="pr-12 my-4 mr-2 border rounded"
          type="text"
          name=""
          id=""
          placeholder="Top text"
        />
        <input
          className="pr-12 my-4 ml-2 border rounded"
          type="text"
          name=""
          id=""
          placeholder="Bottom text"
        />
      </div>
      <button
        onClick={newMeme}
        className="px-40 py-3 text-sm text-white rounded bg-gradient-to-r from-purple-900 to-fuchsia-800 "
        type="submit"
      >
        Get a new meme image🖼
      </button>
      <div className="">
        <img src={memeImg} alt="" />
        <h2 className="text-xl text-white top meme-text"></h2>
        <h2 className="text-xl text-white bottom meme-text"></h2>
      </div>
    </div>
  );
}
