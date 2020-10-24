import React, { Component } from 'react';


class Stateful extends Component{

    constructor(props){
        super(props);
        this.state({
            hello: 'Hola mundo'
        });
    }

    render(){

        const {hello} = this.state;

        return(
            <>
                <h1>{ hello }</h1>
            </>
        );
    }
}

export default Stateful;