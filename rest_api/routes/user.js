const express = require("express")
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleCreateUser, handleDeleteUser} = require("../controllers/user")
const router = express.Router()

router.route("/").get(handleGetAllUsers).post(handleCreateUser)

router.get("/:id", handleGetUserById)

router.patch("/:id",handleUpdateUserById)

router.delete("/:id",handleDeleteUser)

module.exports = router; 



// router.get("/", async (req,res)=>{
//     const dbUsers = await User.find({});
//     const html = `
//     <ul>
//     ${dbUsers.map((users)=>`<li>${users.firstName}</li>`).join("")}
//     </ul>
//     `

//     res.send(html);
// })