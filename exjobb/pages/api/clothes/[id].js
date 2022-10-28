import db from 'db'

export default async function handler(req, res) {
    const id = req.query.id 
    const cloth = db.clothes.find(c => c.id === Number(id))
    res.status(200).json(cloth || {})
}
//http://localhost:3000/api/clothes/1