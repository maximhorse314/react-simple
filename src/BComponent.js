import React from 'react';
import AComponent from './AComponent';

class BComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };

    }

    updateValue = (value) => {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <AComponent value = {this.state.value} updateValue = {this.updateValue}></AComponent>
                <h1>you clicked {this.state.value} times</h1>
            </div>
        );
    }
}

export default BComponent;