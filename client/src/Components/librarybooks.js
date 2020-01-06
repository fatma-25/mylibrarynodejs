import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography";
import axios from 'axios'




const styles = muiBaseTheme => ({
  card: {
    maxWidth: 150,
   
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.6)"
      // boxShadow: "0 10px 50px 0px rgba(0,0,0,0.6)"
    }
  },
  media: {
    height: 200,
    width: '100%'
  },

 
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
    
  },

});


 function Librarybooks({classes, book, deleteBook}) {
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
    // <div> 
    <Card className={classes.card} >
        <CardMedia
          className={classes.media}
          image={book.image}
          // image="https://www.engine-house.co.uk/wp-content/uploads/2016/03/MrMercedes_2.gif"
        
        />
        <CardContent className={classes.content}>
       
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
           {book.title}
        <button type="button" class="btn btn-link"  onClick={() =>deleteBook(book.id)}>delete</button>  
            <button type="button" class="btn btn-link" onClick={viewHandler}> View Pdf </button>
        <button type="button" class="btn btn-link" onClick={download}>download</button>

    

          </Typography>
       
        </CardContent>
      </Card>
      // </div>
  );
}

export default withStyles(styles)(Librarybooks)
