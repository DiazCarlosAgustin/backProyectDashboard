"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.route('/')
    .get(user_controller_1.getUsers)
    .post(user_controller_1.createUser);
exports.default = router;
