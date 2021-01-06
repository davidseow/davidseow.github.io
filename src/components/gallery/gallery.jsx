import ImageMasonry from "react-image-masonry";
import { shuffle } from "../../lib/shuffle";

const imagesPath = [
  "./assets/photos/DSC01435.jpg",
  "./assets/photos/DSCF0469.jpg",
  "./assets/photos/DSCF1264.jpg",
  "./assets/photos/DSCF3526.jpg",
  "./assets/photos/DSCF5285.jpg",
  "./assets/photos/DSCF5552.jpg",
  "./assets/photos/DSCF5848.jpg",
  "./assets/photos/DSCF7549.jpg",
  "./assets/photos/DSCF7599.jpg",
  "./assets/photos/DSCF7608.jpg",
  "./assets/photos/DSCF7961.jpg",
  "./assets/photos/IMG_0159.jpg",
  "./assets/photos/IMG_0399.jpg",
  "./assets/photos/IMG_0404.jpg",
  "./assets/photos/IMG_0556.jpg",
  "./assets/photos/IMG_1096.jpg",
  "./assets/photos/IMG_2327.jpg",
  "./assets/photos/IMG_2352.jpg",
  "./assets/photos/IMG_2866.jpg",
  "./assets/photos/IMG_2874.jpg",
  "./assets/photos/IMG_3063.jpg",
  "./assets/photos/IMG_3384.jpg",
  "./assets/photos/IMG_3488.jpg",
  "./assets/photos/IMG_3557.jpg",
  "./assets/photos/IMG_3627.jpg",
  "./assets/photos/IMG_5387.jpg",
];

const Gallery = () => (
  <ImageMasonry
    imageUrls={shuffle(imagesPath)}
    numCols={3}
    containerWidth={"100%"}
  />
);

export default Gallery;
