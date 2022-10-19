import clothesJson from './clothes.json'

export const media = clothesJson.clothes

export const mediaById =(id) => media.find(c => c.typ.top === top)

export const mediaByIndex = index => media[index % media.length].url;

export default clothesJson