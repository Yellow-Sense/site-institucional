var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarGranjas", function (req, res) {
    usuarioController.listarGranjas(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/verTemp", function (req, res) {
    usuarioController.verTemp(req, res);
});

router.post("/graficoM", function (req, res) {
    usuarioController.graficoM(req, res);
});

router.post("/graficoM2", function (req, res) {
    usuarioController.graficoM2(req, res);
});

router.post("/graficoA", function (req, res) {
    usuarioController.graficoA(req, res);
});

router.post("/graficoA2", function (req, res) {
    usuarioController.graficoA2(req, res);
});

router.post("/listar_anos", function (req, res) {
    usuarioController.listar_anos(req, res);
});

module.exports = router;