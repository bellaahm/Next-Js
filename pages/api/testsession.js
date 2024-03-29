const { getSession } = require("next-auth/react")

const  handler=async (req,res)=>{
    const session =await getSession({req});
    if(!session)
        res.status(401).json({error:"Un Authonticated Access"})
    else
        res.status(200).json({msg:"Success",session})
}
export default  handler;