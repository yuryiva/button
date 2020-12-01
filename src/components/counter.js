import React, {Component} from 'react'

class Counter extends Component {
    state={
        count:0
    }
        
    render(){
        const {count} = this.state;
        const newCount = this.state.count + 1;
        return(
            <span>
                <h1>COUNT IS: {count}</h1>
                <button
                onClick={(event)=>{
                    this.setState({count:newCount})
                }}>+</button>
            </span>
        )
    }

}

export default Counter;
