const express = require('express');
const cadexController = require("../controller/cadex");
const validationModule = require('../validation/validation');
const {cadexSchema,packageSchema} = require("../validation/schema");

const router = express.Router();

/**
 * POST /cadex
 * @summary Ajoute des mots à mon dictionnaire
 * @tags POST
 * @param {Cadex} request.body
 * @return {} 200 - success response - application/json
 */
router.post("/v1/cadex",validationModule.validateBody(cadexSchema),cadexController.add);



router.post("/v1/pakage",validationModule.validateBody(packageSchema),cadexController.add);

// gestion de la 404

module.exports = router;