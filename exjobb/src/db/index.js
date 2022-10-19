import clothesJson from './clothes.json'

export const media = ['/top.jpg', '/', media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];

export default clothesJson