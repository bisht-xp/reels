"use client";
import {
  Ellipsis,
  Heart,
  MessageCircle,
  Play,
  Share2,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  subtitle: string;
};

const Reels = ({ src, title, subtitle }: Props) => {
  const [isPlay, setIsPlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isLike, setIsLike] = useState(false);
  const [copied, setCopied] = useState(false);

  const onClickLiked = () => {
    setIsLike((prev) => !prev);
  };

  const handleClick = () => {
    if (!playerRef.current) return; // Mark user interaction

    if (isPlay) {
      setIsPlay(false);
      playerRef.current.pause();
    } else {
      setIsPlay(true);
      playerRef.current.play();
    }
  };

  function handleCopied() {
    setCopied(true);
    let timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const toggleMute = () => {
    if (!playerRef.current) return;
    setIsMuted((prev) => !prev);
    playerRef.current.muted = !playerRef.current.muted;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (playerRef.current) {
            if (entry.isIntersecting) {
              playerRef.current.play();
              setIsPlay(true);
            } else {
              playerRef.current.pause();
              setIsPlay(false);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="relative h-full w-full flex justify-center items-stretch gap-2 snap-start snap-always md:h-auto md:w-auto">
        <div className="h-full w-full relative top-0 left-0 bg-transparent md:rounded-lg md:h-[80vh] md:w-[359px]">
          <button
            onClick={toggleMute}
            className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-full z-20"
          >
            {isMuted ? (
              <VolumeX size={24} className="text-white" />
            ) : (
              <Volume2 size={24} className="text-white" />
            )}
          </button>
          <button
            onClick={handleClick}
            className="absolute top-[50%] left-[50%] bg-opacity-50 p-2 rounded-full z-20 "
          >
            {!isPlay && (
              <Play
                size={50}
                className="text-white -translate-x-7 -translate-y-6"
              />
            )}
          </button>
          <video
            ref={playerRef}
            crossOrigin="anonymous"
            playsInline
            muted
            autoPlay
            src={src}
            className="w-full h-full md:rounded-lg"
            loop
            onClick={handleClick}
          />
          <div className="absolute bottom-20  px-4 pb-3 w-full overflow-y-auto md:bottom-0">
            <h6 className="text-white font-bold text-lg">{title}</h6>
            <p className="text-white font-medium text-sm">
              {subtitle.split(" ").map((word, index) =>
                word.startsWith("@") ? (
                  <span key={index} className="text-blue-600 cursor-pointer">
                    {word}{" "}
                  </span>
                ) : (
                  ` ${word} `
                )
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end gap-4 absolute right-2 bottom-32 z-10 md:static">
          <div className="flex flex-col justify-center items-center gap-1">
            <button className=" w-14 p-2 inline-flex flex-col justify-center items-center">
              <Heart
                onClick={onClickLiked}
                size={30}
                color={`${isLike ? "red" : "white"}`}
                className=" hover:text-gray-500"
              />
              <span className="text-white">{isLike ? 1 : 0}</span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <button className=" w-14 p-2 inline-flex flex-col justify-center items-center">
              <MessageCircle
                size={30}
                className="text-white hover:text-gray-500"
              />
              <span className="text-white">460</span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <button onClick={handleCopied} className=" w-14 p-2 inline-flex flex-col justify-center items-center">
              <Share2 size={30} className="text-white hover:text-gray-500" />
              <span className="text-white">{copied ? "Copied!" : ""}</span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <button className=" w-14 p-2 inline-flex flex-col justify-center items-center">
              <Ellipsis size={30} className="text-white hover:text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-14 w-full bg-transparent"></div>
    </>
  );
};

export default Reels;
