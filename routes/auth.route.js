const express = require("express");

const authController = require("../controllers/auth.controller");

const router = express.Router(); // 라우터 객체 생성

router.get("/signup", authController.getSignup); // 가입 페이지를 제공하기 위한 route

module.exports = router;
