const jwt = require("jsonwebtoken");
const { Users } = require('../schema');

require('dotenv').config();

//access token & refresh token
module.exports = async(req, res, next) => {
   try{ 
    const accessToken = req.headers.authorization;
    if(!accessToken) {
        return res.status(401).send({
            errorMessage : '다시 로그인해 주세요.'
        })
    }
    const [tokenType, tokenValue] = accessToken.split(' ');
    if(tokenType !== 'Bearer' || tokenValue === 'null' || tokenValue === 'undefind' || !tokenValue) {
        return res.status(401).send({
            errorMessage : '로그인후 사용이 가능합니다.'
        });
    }
    const _id = jwt.verify(tokenValue, process.env.SECRET_KEY);
    const userInfo = Users.findByPk(_id);
    res.locals.user = userInfo;
    next();
    }catch(error) {
        res.status(401).json({
            errorMessage : '로그인 후 이용이 가능합니다.'
        })
    }
};



//authorization 

// module.exports = async(req, res, next) => {

//     try{
//     const [tokenType, tokenValue] = req.headers['authorization'].split(' ');
//     if(tokenType !== 'Bearer') {
//         return res.status(401).send({
//             errorMessage : '로그인이 필요합니다.'
//         });
//     }
//     const _id = jwt.verify(tokenValue, process.env.SECRET_KEY);
//     const userInfo = Users.findByPk(_id);
//     res.locals.user = userInfo;
//     next();
//     }catch(error) {
//         res.status(401).json({
//             errorMessage : '로그인 후 이용이 가능합니다.'
//         })
//     }
// };