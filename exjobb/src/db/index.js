import clothesJson from './clothes.json'

export const media = clothesJson.clothes

export const getMediaById = (id) => media.find(c => Number(c.id) === Number(id))
export const mediaByTop = media.filter(c => c.typ === 'top')
export const mediaByBottom = media.filter(c => c.typ === 'bottom')
export const mediaByShoe = media.filter(c => c.typ === 'shoe')

export const mediaByTyp = typ => media[typ % media.length].url;

export default clothesJson