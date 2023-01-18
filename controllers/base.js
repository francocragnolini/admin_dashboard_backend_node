const { response } = require('express');



const base = async( req, res ) => {

    

    res.json({
        estado: "ok",
        status:200,
    });

}



module.exports = {
    base
}