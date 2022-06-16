import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

function Details() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <img src={movies.medium_cover_image} alt={movies.title} />
            <h1>{movies.title}</h1>
            <p>{movies.year}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Details;
