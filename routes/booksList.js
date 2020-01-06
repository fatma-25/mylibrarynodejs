const express = require("express");
const router = express.Router();
const BookList = require("../models/booksList")




//route localhost:5000/book/addToAcceuil
router.post("/add", (req, res) => {
    const { image, title, raiting, description, categorie, filename } = req.body;
    BookList.findOne({ title }).then(book => {
      if (book) {
        return res.json({ msg: "book already exist" });
      } else {
        const newbook = new BookList({ image, title, raiting, description, categorie, filename });
        newbook.save()
        .then(book => res.send(book))
        .catch(err => {
          res.send(err);
        });
    }})})



 //route localhost:5000/book/getAllFromAcceuil

 router.get("/",(req,res)=>{
    BookList.find().then(book=>
        res.send(book).catch(err=>console.log(err))
        )
    })
            
           //route localhost:5000get/:id getonlyoneFromAcceuil
    
    
           router.get("/:id",(req,res)=>{
            const id = req.params.id
            BookList.findOne({_id : id}, (err, book)=>{
              
                if (err) res.send("cannot find book")
                else res.send(book)
            })
        })
    
        module.exports = router;