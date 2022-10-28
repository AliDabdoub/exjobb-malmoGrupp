import db from "db"

export default async function handler(req, res) {
    res.status(200).json(db || {})
}

//http://localhost:3000/api/clothes/2