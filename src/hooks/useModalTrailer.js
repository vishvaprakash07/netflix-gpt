import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingTrailer } from "../utils/movieSlice";

const useModalTrailer = (movieId) => {
    const dispatch = useDispatch();

    //fetching the trailer video and updating the store with trailer video data
    const getMovieVideos = async () => {
        if (!movieId) return;
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(setNowPlayingTrailer({isNowPlayingTrailer: true, nowPlayingTrailerId: movieId, nowPlayingTrailer: trailer}));
    };

    useEffect(() => {
       getMovieVideos();
    }, [movieId]);
}
 

export default useModalTrailer;