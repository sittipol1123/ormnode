const jwt = require('jsonwebtoken');

exports.verifytoken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token){
        return res.status(403).send("a token is reqired for authen");
    }

    try{
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
    }catch(err){
        return res.status(401).send("invalid token");
    }

    return next();
}