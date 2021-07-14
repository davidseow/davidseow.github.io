import React from "react";
import ImageMasonry from "react-image-masonry";
import { shuffle } from "../../lib/shuffle";

const imagesPath = [
  "/photos/DSC01435.jpg",
  "/photos/DSCF0469.jpg",
  "/photos/DSCF1140.jpg",
  "/photos/DSCF1264.jpg",
  "/photos/DSCF3189.jpg",
  "/photos/DSCF3526.jpg",
  "/photos/DSCF5285.jpg",
  "/photos/DSCF5552.jpg",
  "/photos/DSCF5848.jpg",
  "/photos/DSCF7549.jpg",
  "/photos/DSCF7599.jpg",
  "/photos/DSCF7608.jpg",
  "/photos/DSCF7961.jpg",
  "/photos/IMG_0065.jpg",
  "/photos/IMG_0159.jpg",
  "/photos/IMG_0399.jpg",
  "/photos/IMG_0404.jpg",
  "/photos/IMG_0512.jpg",
  "/photos/IMG_0556.jpg",
  "/photos/IMG_0634.jpg",
  "/photos/IMG_1096.jpg",
  "/photos/IMG_2327.jpg",
  "/photos/IMG_2352.jpg",
  "/photos/IMG_2538.jpg",
  "/photos/IMG_2866.jpg",
  "/photos/IMG_2874.jpg",
  "/photos/IMG_3063.jpg",
  "/photos/IMG_3292.jpg",
  "/photos/IMG_3384.jpg",
  "/photos/IMG_3488.jpg",
  "/photos/IMG_3557.jpg",
  "/photos/IMG_3627.jpg",
  "/photos/IMG_4089.jpg",
  "/photos/IMG_5387.jpg",
  "/photos/IMG_5876.jpg",
  "/photos/IMG_6127.jpg",
  "/photos/IMG_6951.jpg",
  "/photos/IMG_7404.jpg",
  "/photos/IMG_8186.jpg",
];

const Gallery = () => (
  <ImageMasonry
    imageUrls={shuffle(imagesPath)}
    numCols={3}
    containerWidth={"100%"}
  />
);

export default Gallery;
