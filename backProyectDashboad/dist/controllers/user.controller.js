"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = exports.getUsers = void 0;
const user_1 = require("../entity/user");
const typeorm_1 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield typeorm_1.getRepository(user_1.user).find();
        res.json({ "status": "OK", "user": users });
    });
}
exports.getUsers = getUsers;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const validedEmail = yield typeorm_1.getRepository(user_1.user)
            .find({ where: { email: newPost.email } });
        if (validedEmail.length > 0) {
            res.json({ "status": "Fail", "msg": `El email ${newPost.email} ya esta registrado` });
        }
        else {
            newPost.password = bcrypt.hashSync(newPost.password, 10);
            const newUser = yield typeorm_1.getRepository(user_1.user).save(newPost);
            res.json({ "status": "OK", "msg": "se registro correctamente", "user": newUser });
        }
    });
}
exports.createUser = createUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield typeorm_1.getRepository(user_1.user).find(req.body.id);
    });
}
exports.getUser = getUser;
