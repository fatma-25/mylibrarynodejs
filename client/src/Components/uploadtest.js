import React, { Component } from 'react'
import {AnchorButton} from "@blueprintjs/core";
import '../App.scss'
import axios from "axios"


export default class Upload extends Component {
constructor(props){
    super(props)
    this.state={
  
      file:null,
  // image:"",
  title:"",
  description:"",
  categorie:"",
  filename:"",
  alert:false

    }
}


handleChange=(e)=>{

  this.setState({
    [e.target.name]: e.target.value,
 
  })

}


handleChangeimage=(e)=>{

//Get current selected or dropped file (it gives you the ability to load multiple images).
this.setState({
  image:e.currentTarget.files[0]
})
// console.log(this.state.image)
const image = e.currentTarget.files[0]
console.log("imaaaage",image)

 if(image){
  //Create instance 
  let fileReader = new FileReader();
  //Register event listeners
 

  //Read the file as a Data URL (which gonna give you a base64 encoded image data)
  fileReader.readAsDataURL(image);}
}


onFileLoad=(e)=> {
  //Get current selected or dropped file (it gives you the ability to load multiple images).
  this.setState({
    file:e.currentTarget.files[0]
  })
console.log(this.state.file)
  const file = e.currentTarget.files[0]
console.log("zzzzzzzzzzzzzzz",file)



 if(file){
  //Create instance 
  let fileReader = new FileReader();
  //Register event listeners
  fileReader.onload = () => {
    // console.log("IMAGE LOADED: ", fileReader.result);
  }

  //Read the file as a Data URL (which gonna give you a base64 encoded image data)
  fileReader.readAsDataURL(file);}

}
fileUpload= ()=>{

this.setState({
  alert:!this.state.alert
})

console.log(this.state.image)

  const fd = new FormData();
  fd.append('file', this.state.image);
  axios.post('/uploadimage', fd).then(res =>console.log(res.data))


 const formData = new FormData();
formData.append('file', this.state.file);

 axios.post('/upload', formData).then(res =>console.log(res.data))

     const { description, title, image,categorie, file } = this.state;
     axios
       .post("/bookList/add", {
         description,
         title,
         image:image.name,
         categorie,
         filename:file.name
       })
       .then(res =>console.log(res.data));

      }
 



    render() {
        return (
<div>
{this.state.alert ?
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>PDF UPLODED</strong> You should check your session to see it
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> : null
}
<div className="dragandform" >


  <div
                className="inner-container"
        style={{
        display: "flex",
        flexDirection: "column"
      }}>
        {/* <div className="sub-header">Drag a Book in here</div> */}
        <div className="draggable-container">
          <input
            type="file"
            id="file-browser-input"
            name="file-browser-input"
            onChange={this.onFileLoad}
          
              />
          <div className="files-preview-container"></div>
          <div className="helper-text">
     
         {this.state.file === null ? <h3>Drag and Drop Books Here</h3> :   <div style={{textAlign:"center"}}><h3>{this.state.file.name}</h3> <h3>{this.state.file.size} Ko</h3></div> }   
          
          </div>
          <div className="file-browser-container">
       
          </div>
        </div>
        {/* <AnchorButton text="Upload" onClick={this.fileUpload}/> */}
       
            </div>




            {/* <form style={{padding:100}}> */}
            <form style={{padding:"100px",display:"flex",flexDirection:"column"}}>

       

<input type="title" id="defaultContactFormEmail" class="form-control mb-4" name="title" placeholder="title"   onChange={this.handleChange} style={{padding:"10px",margin:"10px"}} required/>

<select class="browser-default custom-select mb-4" name="categorie"   onChange={this.handleChange} id="select" style={{padding:"10px",margin:"10px"}}>
    <option value="" disabled="" selected="">Book categorie</option>
    <option value="action">action</option>
    <option value="romance">romance</option>
    <option value="science">science</option>
</select>



  <div class="form-group" style={{padding:"10px",margin:"10px"}}>

    <input type="file" class="form-control-file" id="exampleFormControlFile1" name="image" onChange={this.handleChangeimage} required />
  </div>



<textarea id="textarea" class="form-control mb-4" placeholder="description" name="description"   onChange={this.handleChange} style={{padding:"10px",margin:"10px"}} required></textarea>

 <AnchorButton  type="button" text="Upload" onClick={this.fileUpload} />

</form>


            </div>

            </div>
        )
    }
}

