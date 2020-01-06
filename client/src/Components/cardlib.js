import React, { Component } from "react";
import "./cardlib.css";
import axios from 'axios'


function Cardlib({book, deleteBook}) {
  console.log("hhhhhhhh",book)
    
  let url
  const viewHandler = async () => {
     
      axios({
            url: `/pdf/${book.filename}`,
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
           
         
             url = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
            window.open(url);
      
      });
    };
        const download=async () => {
     
          axios({
                url: `/pdf/${book.filename}`,
                method: 'GET',
                responseType: 'blob', // important
              }).then((response) => {
               
             
                 url = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));        
                
                const link = document.createElement('a');
                       link.href = url;
                       link.setAttribute('download', 'file.pdf');
                       document.body.appendChild(link);
                       link.click();
          });
  
      
  }


    return (
      <div className="blocks">
        <div className="item-holder">
          <div className="block-1 p-0">
           
             <img src={`./image/${book.image}`}  className="img-fluid profileimg" />

            <div className="item-elements">
              <h3> {book.title}</h3>

              <div className="filedetails">
                <p>258 Pages </p>
                <p> 2.74 MB </p>
                <p> Author</p>
              </div>

              <div className="buttons">
                <button className="button"  onClick={() =>deleteBook(book.id)}>Delete</button>
                <button className="button"  onClick={viewHandler}>Read</button>
                <button className="button" onClick={download}>Download</button>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    );
  }
  export default Cardlib