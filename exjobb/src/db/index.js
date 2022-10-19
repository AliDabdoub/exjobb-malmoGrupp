// import clothesJson from './sorted-clothes.json'
import clothesJson from './sorted-clothes.json'
export const top = clothesJson.clothes[0]
export const bottom = clothesJson.clothes[1]
export const shoe = clothesJson.clothes[2]


/*export const TopsById =(id) => media.find(c => c.typ.top === top)
export const BottomById =(id) => media.find(c => c.typ.bottom === bottom)
export const ShoeById =(id) => media.find(c => c.typ.shoe === shoe)*/
export const mediaByTop = typ => top[typ % top.length].url;
export const mediaByBottom = typ => bottom[typ % bottom.length].url;
export const mediaByShoe = typ => shoe[typ % shoe.length].url;

export default clothesJson

