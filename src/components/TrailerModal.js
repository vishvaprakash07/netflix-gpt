import VideoBackground from "./VideoBackground";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNowPlayingTrailer } from "../utils/movieSlice";
import useModalTrailer from "../hooks/useModalTrailer";

const TrailerModal = () => {
  const dispatch = useDispatch();
  const isNowPlayingTrailer = useSelector(
    (store) => store.movies?.isNowPlayingTrailer
  );
  const nowPlayingTrailerId = useSelector(
    (store) => store.movies?.nowPlayingTrailerId
  );
  const nowPlayingTrailer = useSelector(
    (store) => store.movies?.nowPlayingTrailer
  );

  useModalTrailer(nowPlayingTrailerId);

  useEffect(() => {
    if (isNowPlayingTrailer) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNowPlayingTrailer]);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        dispatch(removeNowPlayingTrailer());
      }
    };

    if (isNowPlayingTrailer) {
      window.addEventListener("keydown", handleEscKey);
    }
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isNowPlayingTrailer, dispatch]);

  if (!isNowPlayingTrailer || !nowPlayingTrailerId || !nowPlayingTrailer) return null;

  const handleClose = () => {
    dispatch(removeNowPlayingTrailer());
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 bg-gray-400 hover:bg-gray-800 text-white rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-110"
          aria-label="Close trailer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* VideoBackground Component */}
        <div className="w-screen h-screen">
          <VideoBackground movieId={nowPlayingTrailerId} isModal={true} />
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
