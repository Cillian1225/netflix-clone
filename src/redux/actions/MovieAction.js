import api from "../api";
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail({ id }) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_DETAIL_REQUEST", payload: { id } });
      const movieDetailApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      let [movieDetail] = await Promise.all([movieDetailApi]);

      dispatch({
        type: "GET_DETAIL_MOVIES_SUCCESS",
        payload: {
          movieDetail: movieDetail.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_DETAIL_FAILURE" });
    }
  };
}

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);
      //console.log("장르", genreList);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,

          loading: false,
        },
      });
    } catch (error) {
      //error handling here
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
export const movieAction = {
  getMovies,
  getMovieDetail,
};
