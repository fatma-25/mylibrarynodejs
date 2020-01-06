const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const passport = require("passport");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/users");


//route localhost:5000/user/register
//@desc register new user
//aceess public
router.post("/register", (req, res) => {
  const { login, email, password, date, privilege, imageUser, quote, booklibrary } = req.body;
  User.findOne({ email }).then(user => {
    if (user) {
      return res.json({ msg: "user already exist" });
    } else {
      const newuser = new User({ login, email, password, date, privilege, imageUser, quote, booklibrary });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
          newuser.password = hash;
          newuser
            .save()
            .then(user => res.send(user))
            .catch(err => {
              res.send(err);
            });
        });
      });
    }
  });
});

//route localhost:5000/user/login
//@desc login user
//access public

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.json({ msg: "email not exist" });
    } else {
      bcrypt.compare(password, user.password).then(isMatched => {
        if (isMatched) {
          const payload = { id: user.id, email: user.email };
          jwt.sign(
            payload,
            config.get("secretkey"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({ token: "Bearer " + token,id:user._id });
            }
          );
        } else {
          return res.json({ msg: "password incorrect" });
        }
      });
    }
  });
});

//route localhost:5000/user/current
//@desc verif user
//access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

    //route localhost:5000/user/deleteAccount

    router.delete("/delete/:id",(req,res)=>{
      const id = req.params.id
      User.findOneAndDelete({_id : id}, (err, data)=>{
        
          if (err) res.send("cannot delete account")
          else res.send('account was deleted')
      })
  })

//route localhost:5000/user/addBookFavorit

router.put('/edit/:id',(req,res)=>
{
    let {id}=req.params
    let addBookFavorit=req.body
    console.log(addBookFavorit)
    // const {updateprofil}=req.body
    User.findOneAndUpdate({_id: id},{$push:{booklibrary:addBookFavorit}}).then(book=>res.send(book)).catch(err=>console.log(err))
    console.log(addBookFavorit)
})

   //route localhost:5000/user/get :id getUser


   router.get("/:id",(req,res)=>{
    const id = req.params.id
    User.findOne({_id : id}, (err, user)=>{
      
        if (err) res.send("cannot find user")
        else res.send(user)
    })
})


// router.put('/deletefavbook/:id',(req,res)=>
// {
//     let {id}=req.params
//     let deleteprofil=req.body
 
//     // const {updateprofil}=req.body
//     User.findOneAndUpdate({_id: id},{$pull:{booklibrary:deleteprofil}}).then(profil=>res.send(profil)).catch(err=>console.log(err))

// })


router.put('/deletebook/:id',(req,res)=>
{
    let {id}=req.params
    let bookdelete=req.body
    console.log('bookdelete',bookdelete)
    // const {updateprofil}=req.body
    User.findOneAndUpdate({_id: id},{$set:{booklibrary:bookdelete}}).then(profil=>res.send(profil)).catch(err=>console.log(err))
  
})


//modifuser

router.put('/edituser/:id',(req,res)=>
{
    let {id}=req.params
    let updateuser=req.body
    console.log('updateuser',updateuser)

    User.findOneAndUpdate({_id: id},{$set:{...updateuser}}).then(profil=>res.send(profil)).catch(err=>console.log(err))
  
})




module.exports = router;