import express from "express";

const router = express();

router.get("/", (req, res)=> {
    res.status(200).json({
        "status": 200,
        "message": "welcome to my article app"
    })
});

export default router;
