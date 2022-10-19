import clothesJson from './clothes.json'

export const media = clothesJson.clothes
export const mediaTop = media.filter(typ => typ.includes("top"))

/*export const TopsById =(id) => media.find(c => c.typ.top === top)
export const BottomById =(id) => media.find(c => c.typ.bottom === bottom)
export const ShoeById =(id) => media.find(c => c.typ.shoe === shoe)*/

export const mediaByTyp = typ => mediaTop[typ % mediaTop.length].url;

export default clothesJson

