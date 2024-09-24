import jwt from 'jsonwebtoken'


const isAuthenticated = async(req, res,next) =>{
    try{
        const token = req.cookies.token;
        // console.log(token) ;
        if(!token){
            res.status(401).json({message : "not  authenticated"})
        };
        
            const decode =  jwt.verify( token , process.env.Jwt_secret_key)
            if(!decode){
                return res.status(401).json({message:'invalid token'})
            };
        
    
    // console.log(decode)
  

        req.id = decode.userid;

        next()

    }catch(error){
        console.log(error)
    }
}

export default isAuthenticated