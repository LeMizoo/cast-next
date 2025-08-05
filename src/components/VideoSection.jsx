import React, { useState } from "react";
import { motion } from "framer-motion";
import "./VideoSection.css";

const videos = [
  {
    title: "Concert à la Cathédrale",
    description: "Moments forts sous la voûte céleste.",
    thumbnail: "/assets/images/slide1.jpg",
    src: "/assets/videos/concert-cathedral.mp4",
  },
  {
    title: "Chant sacré en forêt",
    description: "Une rencontre entre spiritualité et nature.",
    thumbnail: "/assets/images/slide2.jpg",
    src: "/assets/videos/chant-foret.mp4",
  },
  {
    title: "Répétition en studio",
    description: "L’envers du décor et la passion du collectif.",
    thumbnail: "/assets/images/slide3.jpg",
    src: "/assets/videos/repetition.mp4",
  },
];

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <section className="video-section py-10 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">
        Nos vidéos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setCurrentVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {video.description}
            </p>
          </motion.div>
        ))}
      </div>

      {currentVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full max-w-3xl p-4">
            <button
              onClick={() => setCurrentVideo(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✕
            </button>
            <video
              src={currentVideo.src}
              controls
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-white text-center text-xl">
              {currentVideo.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;