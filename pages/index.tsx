import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Header from "../components/header/Header";

import messages from "../json/messages.json";
import Message from "../components/message/Message";
import { getRandomMessage } from "../utils/getRandomMessage";

import YouTube from "react-youtube";
import useResponsiveVideoOpts from "../utils/useResponsiveVideoOpts";

import Carousel from "../components/carousel/Carousel";
import { imageItems } from "../utils/imageItems";

const Home: NextPage = () => {
  const [randomMessage, setRandomMessage] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [songs] = useState<{ video: string; youtubeId: string }[]>([]);
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("Song_01");
  const opts = useResponsiveVideoOpts();

  useEffect(() => {
    setRandomMessage(getRandomMessage(messages));
  }, [selectedTitle]);

  const handleImageClick = (title: string, youtubeId: string) => {
    setSelectedSong(youtubeId);
    setSelectedTitle(title);
    setShowVideo(true);
  };

  const items = imageItems(handleImageClick);

  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <Header
          showVideo={showVideo}
          selectedSong={selectedSong}
          songs={songs}
        />
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          {!showVideo && (
            <>
              <Message randomMessage={randomMessage} />
            </>
          )}

          {showVideo && selectedSong ? (
            <div className="video-section flex flex-col items-center">
              <div className="video-container overflow-hidden rounded-xl">
                <YouTube videoId={selectedSong} opts={opts} />
              </div>
            </div>
          ) : (
            <>
              <Carousel items={items} />
            </>
          )}

          {showVideo && selectedSong && (
            <button
              onClick={() => window.location.reload()}
              className="mt-2 box-border inline-block cursor-pointer rounded-lg border-none bg-pink-500 p-2.5 text-center text-3xl font-medium leading-5 text-white transition-colors duration-100 ease-in-out hover:bg-pink-400 focus:bg-pink-400 max-2xl:h-10 2xl:text-7xl"
            >
              Go Back
            </button>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
