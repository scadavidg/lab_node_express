const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({ msg: "todos los productos" });
})

router.post('/', (req, res) => {
    res.json({ msg: "producto insertado" });
})

router.put('/', (req, res) => {
    res.json({ msg: "producto actualizado" });
})

router.delete('/', (req, res) => {
    res.json({ msg: "producto eliminado" });
})

module.exports = router;