import React from "react";
import "./MovieList.css";

function ListItem(props) {
  return <li class="list-group-item">{props.value}</li>;
}

function MovieList(props) {
  const movies = props.movies;
  const loading = props.loading;
  console.log("Movies:");
  console.log(movies);
  if (loading) return <div>loading</div>;
  if (movies) {
    console.log("Title:");
    const listItems = movies.results.map((movie, index) => (
      <ListItem key={index} value={movie.title} />
    ));
    return (
      <div>
        <h2>Now Playing</h2>
        <ul class="list-group list-group-flush">{listItems}</ul>
      </div>
    );
  }
}

export default MovieList;
