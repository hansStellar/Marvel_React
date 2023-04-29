import React, { useEffect, useState } from "react";

const Series = ({ serieId }) => {
  // Serie
  const [serie, setSerie] = useState();

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${serieId}&apikey=3f4ab6aff6e18d2f75c901bd8594fcad`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* 
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
       */}
    </div>
  );
};

export default Series;
