// import clothesJson from './clothes.json'
import clothesJson from './sorted-clothes.json'

// export const media = clothesJson.clothes
export const mediaTop = clothesJson.clothes[0]
export const mediaBottom = clothesJson.clothes[1]
export const mediaShoe = clothesJson.clothes[2]
// export const mediaTop = media.filter(typ => typ.includes("top"))

/*export const TopsById =(id) => media.find(c => c.typ.top === top)
export const BottomById =(id) => media.find(c => c.typ.bottom === bottom)
export const ShoeById =(id) => media.find(c => c.typ.shoe === shoe)*/

export const mediaByTypTop = typ => mediaTop[typ % mediaTop.length].url;
export const mediaByTypBottom = typ => mediaBottom[typ % mediaBottom.length].url;
export const mediaByTypShoe = typ => mediaShoe[typ % mediaShoe.length].url;

export default clothesJson

