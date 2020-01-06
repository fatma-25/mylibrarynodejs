import React, { Component } from 'react'

export default class Nav extends Component {
constructor(props){
    super(props)
    this.state={
        search:"" 
    }
}

            
handlechange=(e)=>{
   this.setState({
    search:e.target.value
})
this.props.bookname(e.target.value)
}
    render() {
        return (
            <div>
              
            <input type='text' value={this.state.search} onChange={e=>this.handlechange(e)}/>
           
            </div>
        )
    }
}


