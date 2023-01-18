import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/MovieAction";
import MovieDetailPage from "./movieDetailPage";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movie);
  let { id } = useParams();
  useEffect(() => {
    dispatch(movieAction.getMovieDetail({ id }));
  }, []);

  return (
    <div>
      <MovieDetailPage movieDetail={movieDetail} />;
    </div>
  );
};

export default MovieDetail;
