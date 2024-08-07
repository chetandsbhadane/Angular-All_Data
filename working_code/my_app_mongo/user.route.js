const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    // next(new Error("Cannot get user"))
    res.send("geting a lsit of users");

}
)

router.post("/",
    function (req, res) {
        console.log(req.body.name);
        const contact = new Contact({
            email: req.body.name,
            query: req.body.pass,
        });
        contact.save(function (err) {
            if (err) {
                throw err;
            } else {
                res.render("contact");
            }
        });
});


module.exports = router;