const express = require("express");
const { contactInsert } = require("../Controllers/contController");

const contactRouter = express.Router();

contactRouter.post("/insert",contactInsert)

module.exports = contactRouter