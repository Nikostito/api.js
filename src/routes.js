const express = require("express")
const Item = require("./models/Item")
const router = express.Router()
const pageLimit = 25

router.get("/:cat", async (req, res) => {
    const items = await Item
        .find({ cat: req.params.cat })
        .limit(pageLimit)
        .sort('-dt')
        .paginate()
    res.send(items)
})

module.exports = router