const { Router } = require("express");

const CountWordController = require("../controllers/countword.controller");

const controller = new CountWordController();

const router = Router();

router.post("/wordcount", controller.countWords);

module.exports = router;
