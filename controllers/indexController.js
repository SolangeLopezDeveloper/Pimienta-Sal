const productos = require('../data/productos.json')


module.exports={
    index: (req,res)=>{ 
        console.log(productos.length);
        return res.render('index',{
            productos})},
detail: (req,res)=>{
    const {id} = req.params;
    const product= productos.find(product => product.id === +id);
    return res.render('detalleMenu',{
        product})}
}