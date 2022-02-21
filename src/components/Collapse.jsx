import React from "react";

class Collapse extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {isShown:false,isTrue:false}
    }
    handleClick = () =>{
        this.setState(prevState=>({
            isShown:!prevState.isShown,
            isTrue:!prevState.isTrue
        }))
    }

    render(){
        return(
            <div className="main">
                <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded={this.state.isTrue ? true : false} aria-controls="collapseExample" onClick={this.handleClick}>
                    Press me
                  </button>
                  <div className={this.state.isShown ? "show" : "hide"}>
                      {this.props.text}
  </div>
                  


            </div>
            
        )
    }
}
export default Collapse