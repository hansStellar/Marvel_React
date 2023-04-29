import React from "react";
import { useSelector } from "react-redux";

const Series = () => {
  // Serie
  const serie = useSelector((state) => state.series.serie);

  return (
    <div>
      {serie && Object.keys(serie).length !== 0 ? (
        <div>
          <h2>{serie.title}</h2>

          <img
            src={serie.thumbnail.path + "." + serie.thumbnail.extension}
            title={serie.title}
          />
          <a href={serie.urls[0].url}>Comic URL</a>
        </div>
      ) : (
        <h2>No serie has been selected/found</h2>
      )}
    </div>
  );
};

export default Series;
