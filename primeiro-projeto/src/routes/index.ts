import express  from "express";

export const router = express.Router()


router.get('', (req, res) => {
    let name = 'Bruno';
    let age = 90;

    res.json({name, age})
})



