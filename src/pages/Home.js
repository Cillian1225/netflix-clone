import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  console.log("popular list", popularMovies);
  //if loading is true => loading spinner show
  //if loading is false =>show data list
  //true: before data's arrived
  //false: before data's arrived or error's occurred

  /** data loading spinner controller **/
  if (loading) {
    return <ClipLoader color="#fffff" loading={loading} size={150} />;
  }
  return (
    /**Popular Movie's first is Banner**/
    <div className="banner-title">
      <Banner movie={popularMovies.results[0]} />
      <h1>Popular Movies</h1>
      <MovieSlide movies={popularMovies} />
      <h1>TopRatedMovies</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>UpcomingMovies</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
};

export default Home;
