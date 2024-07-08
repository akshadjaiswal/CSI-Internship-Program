import jwt from 'jsonwebtoken';
const verifyToken = async (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
            if(err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        })
    }
    else{
        return res.status(401).json("You are not authenticated");
    }
}

const verifyTokenAndAuthorization = async (req,res,next)=>{
    verifyToken(req,res,()=>{

        if(req.user.id === req.params.id || req.user.isadmin){
            next();
        }
        else{
            res.status(403).json("you are not allowed to do that!");
        }
    })
}
const verifyTokenAndAdmin = async (req,res,next)=>{
    verifyToken(req,res,()=>{

        if(req.user.isadmin){
            next();
        }
        else{
            res.status(403).json("you are not allowed to do that!");
        }
    })
}
//
export {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};