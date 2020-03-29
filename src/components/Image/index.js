import React from "react";

const Image = ({ src, className, alt, onClick, style }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    style={style}
    onClick={onClick}
  />
);

export default Image;
