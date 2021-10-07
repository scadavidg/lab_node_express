const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({ msg: "todos las ventas" });
})

router.post('/', (req, res) => {
    res.json({ msg: "venta insertada" });
})

router.put('/', (req, res) => {
    res.json({ msg: "venta actualizada" });
})

router.delete('/', (req, res) => {
    res.json({ msg: "venta eliminada" });
})

module.exports = router;