const express = require("express")

const router = express.Router()


router.get("/",async(req,res)=>{
    const dbUsers = await User.find({});

    return res.json(dbUsers)
})

// router.get("/", async (req,res)=>{
//     const dbUsers = await User.find({});
//     const html = `
//     <ul>
//     ${dbUsers.map((users)=>`<li>${users.firstName}</li>`).join("")}
//     </ul>
//     `

//     res.send(html);
// })

router.get("/:id", (req, res)=>{
    const id = Number(req.params.id)    
    const user = users.find((user)=> user.id === id)
    return res.json(user)
})


router.post("/",async (req, res)=>{
    //TODO: Create New User
    const body = req.body;

    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.ipAddress 
    ){
        return res.status(400).json({statusbar : "All Fields are required"})
    }
    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        gender : body.gender,
        ipAddress : body.ipAddress,
    })

    return res.status(200).json({statusbar: "Success"})
})


router.patch("/:id",(req,res)=>{
    console.log("Update Year");
    return res.json({statusbar : "Update Year"})
})


router.delete("/:id",(req,res)=>{
    console.log("Delete User");
    return res.json({statusbar : "Delete User"})
})

module.exports = router; 