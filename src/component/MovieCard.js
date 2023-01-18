import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
  rel="stylesheet"
></link>;
const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay" onClick={() => navigate(`/movies/${item.id}`)}>
        <div className="movie-title">
          <h2>{item.title}</h2>
        </div>

        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div className="card-detail">
          <div className="card-rate">
            <span>
              <FontAwesomeIcon icon={faStar} />
              {item.vote_average}
            </span>
          </div>
          <div className="isX-Rated">
            <span>{item.adult ? "/X-Rated" : "/G-Rated"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
