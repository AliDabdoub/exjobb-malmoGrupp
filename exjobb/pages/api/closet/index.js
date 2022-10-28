import db from "db"
//http://localhost:8000/clothes/2

export default async function handler(req, res) {
    res.status(200).json(db || {})
}