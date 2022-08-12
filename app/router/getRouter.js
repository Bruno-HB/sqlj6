const express = require('express');
const cadexController = require("../controller/cadex");

const router = express.Router();

// middleware that is specific to this router
router.get("/v1/cadex",cadexController.getCadex);

// gestion de la 404

module.exports = router;