import db from 'db'
//http://localhost:8000/clothes/2

export default async function handler(req, res) {
    const id = req.query.id 

    const cloth = db.clothes.find(c => c.id === Number(id))
    
    res.status(200).json(cloth || {})
}