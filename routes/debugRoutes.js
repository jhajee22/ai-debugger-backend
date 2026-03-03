const express = require("express");
const router = express.Router();
const { debugCode } = require("../controllers/debugController");

router.post("/", debugCode);

module.exports = router;
