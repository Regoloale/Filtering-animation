import { motion } from "framer-motion";

function Movie({ movie }) {
  const checkMovieTitle = (title) => {
    let length = 35;
    let truncatedTitle = title.substring(0, length);
    if (title.length > 35) {
      return truncatedTitle + "...";
    } else {
      return truncatedTitle;
    }
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{checkMovieTitle(movie.title)}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt=""
      />
    </motion.div>
  );
}

export default Movie;
