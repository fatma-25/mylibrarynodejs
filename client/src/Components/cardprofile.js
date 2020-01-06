import React, { Component } from "react";
import "./cardlib.css";



function Cardprofile({book}) {
  console.log("hhhhhhhh",book)
    
  


    return (
      <div className="blocks">
        <div className="item-holder">
          <div className="block-1 p-0">
            <img
              src={`./image/${book.image}`}  
            
              className="img-fluid profileimg"
            />

            <div className="item-elements">
              <h3> {book.title}</h3>

              <div className="filedetails">
                <p>258 Pages </p>
                <p> 2.74 MB </p>
                <p> Author</p>
              </div>

             
            </div>
          </div>
        </div>
    
      </div>
    );
  }
  export default Cardprofile
