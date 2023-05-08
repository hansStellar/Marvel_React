import React, { useEffect } from "react";

const HoverInfo = ({ info }) => {
  return (
    <div className="popover">
      <h2 className="text-4xl mb-4 text-white line-clamp-2">
        {info.name || info.title}
      </h2>
      <p className="font-thin line-clamp-2">{info.description}</p>
    </div>
  );
};

export default HoverInfo;
