import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect } from "react";

const VideoBackground = (props) => {
    const { movieId } = props;
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    console.log("VideoBackground - trailerVideo: ", trailerVideo);
    const isNowPlayingTrailer = useSelector((store) => store.movies?.isNowPlayingTrailer);
    
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [movieId]);

    const handleVideoEnd = () => {
    // Scroll to SecondaryContainer when trailer ends
    const secondaryContainer = document.getElementById("secondary-container");
    if (secondaryContainer) {
      secondaryContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

    return (
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={ isNowPlayingTrailer ? "https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1" :"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          onEnded={handleVideoEnd}
        ></iframe>
      </div>
    );
};

export default VideoBackground;