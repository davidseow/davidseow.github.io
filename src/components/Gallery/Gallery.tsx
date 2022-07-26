import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./Gallery.css";

const Gallery = (props) => {
  const { images } = props;

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      className="galleryContainer"
    >
      <Masonry className="gallery">
        {images.map((image: string, i: Number) => (
          <img key={i.toString()} src={image} alt="" />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
export default Gallery;
