import React, {Component}from 'react';
import Counter from './CounterButton'


class Header extends Component{
    shouldComponentUpdate(nextProps, nexState){
        return false;
    }
    render(){
        console.log('Header')
        return <div>
            <h1 className="f1">Robo Friends</h1>
            <Counter />
        </div>
    }
}

export default Header;