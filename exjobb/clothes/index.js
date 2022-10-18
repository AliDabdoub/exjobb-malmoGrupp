import media1 from "./image1.jpg";
import media2 from "./image2.jpg";
import media3 from "./image3.jpg";
import media4 from "./image4.jpg";
import media5 from "./image5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];