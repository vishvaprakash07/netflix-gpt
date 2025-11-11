import { useSelector } from "react-redux";


const VideoBackground = ({ movieId, isModal = false }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    const nowPlayingTrailer = useSelector((store) => store.movies?.nowPlayingTrailer);


    return (
      <div className={`w-screen ${isModal ? 'h-screen' : 'aspect-video'}`}>
        <iframe
          className={`w-full ${isModal ? 'h-full' : 'aspect-video'}`}
          src={ isModal ? "https://www.youtube.com/embed/" + nowPlayingTrailer?.key + "?&autoplay=1" :"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
      </div>
    );
};

export default VideoBackground;