const ProductSchema = require('../models/product')


const getProduct = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            let pruducto = await ProductSchema.findById(req.body.id);
            res.json({ pruducto });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede obtener el producto sin el id" })
    }
}

const getProducts = async (req, res) => {
    try {
        let pruductos = await ProductSchema.find();
        res.json({ pruductos });
    }
    catch (err) {
        console.log(err);
    }
}

const createProduct = async (req, res) => {
    if (typeof req.body != 'undefined') {
        let product = new ProductSchema(req.body);
        try {
            await product.save();
            res.json({ msg: 'Se ha creado el producto ' + product.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede crear el producto, revisar los parametros" })
    }
}

const updateProduct = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await ProductSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                   valor: req.body.valor,
                   descripcion: req.body.descripcion,
                   estado: req.body.estado
                }
            );
            res.json({ msg: 'Se ha actualizado el producto ' + req.body.id })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede actualizar el producto, revisar los parametros" })
    }
}


const deleteProduct = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await ProductSchema.findOneAndRemove(req.body.id);
            res.json({ msg: 'Se ha eliminado el producto ' + req.body.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede eliminar el producto sin el id" })
    }
}

module.exports.getProduct = getProduct;
module.exports.getProducts = getProducts;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
