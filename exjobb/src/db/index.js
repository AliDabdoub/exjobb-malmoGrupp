import clothesJson from './clothes.json'

export const media = clothesJson.clothes

/*export const TopsById =(id) => media.find(c => c.typ.top === top)
export const BottomById =(id) => media.find(c => c.typ.bottom === bottom)
export const ShoeById =(id) => media.find(c => c.typ.shoe === shoe)*/

export const mediaByTyp = typ => media[typ % media.length].url;

export default clothesJson