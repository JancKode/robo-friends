import React, {Component}from 'react';


class CounterButton extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
        this.updateCount = this.updateCount.bind(this);
    }
    shouldComponentUpdate(nextProps, nexState){
        return true;
    }   

    updateCount(){
        
        this.setState(state => {
            return {count: state.count + 1}
        })
    }
    render(){
        console.log('Header')
        return (
            <button color={this.props.color} onClick={this.updateCount} >
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;