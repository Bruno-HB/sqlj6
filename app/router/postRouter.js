const express = require('express');
const cadexController = require("../controller/cadex");

const router = express.Router();

// middleware that is specific to this router
router.post("/v1/cadex",cadexController.add);

// gestion de la 404

module.exports = router;