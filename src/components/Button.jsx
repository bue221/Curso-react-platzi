import React from 'react'

class Button extends React.Component {

    state = {
        count: 0,
    }


    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <>
                <h1>Manzanas {count}</h1>
                <button onClick={this.handleClick} >Click</button>
            </>
        )
    }
}

export default Button

