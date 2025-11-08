import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        isNowPlayingTrailer: false,
        nowPlayingTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setNowPlayingTrailer: (state, action) => {
            state.isNowPlayingTrailer = action.payload.isNowPlayingTrailer;
            state.nowPlayingTrailer = action.payload.nowPlayingTrailer;
        },
        removeNowPlayingTrailer: (state, action) => {
            state.isNowPlayingTrailer = false;
            state.nowPlayingTrailer = null;
        }
    }

})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, setNowPlayingTrailer, removeNowPlayingTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;