import React, { Component } from 'react'
import './ClickMeProject.css';
export class ClickMeGameProject extends Component {
    constructor(){
        super();
        this.state={time:10,score:0}
    }
    handleClick(){
        if(this.state.time!=0){
        this.setState({
              score:this.state.score+1
        })
    }}
    handleClick1(){
        this.setState({
            time:10,
            score:0,
            message:''
        })
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.time==0)
        {
             this.setState({
                   message:"Enough I can't be beaten by you",
                   
             })
           
        }
        
        else
        {
            this.setState({
                time:this.state.time-1,
            })
        }
        // <button onClick={this.handleClick1.bind(this)}>Restart</button>
        
    }
  render() {
    return (
        <div className='back' >       
           <p><h1>Click the picture as many times as you can in {this.state.time} wacky seconds!</h1></p>
            <img onClick={this.handleClick.bind(this)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LMhsgHDmo1s2X95fIKrRq2VFIOZJnwoi2lIXqTmEeg2SnEXlyFMj3JH6wzKFPIBkhII&usqp=CAU" height = "400px" width="400px"/>
            <p><h1>Score:{this.state.score}</h1></p> 
            <p>{this.state.message}</p> 
            
            <button onClick={this.handleClick1.bind(this)}>Restart</button>
      </div>
    )
  }
}

export default ClickMeGameProject