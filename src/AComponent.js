import React from 'react';

class AComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    handleClick = () => {
        this.setState({value: this.state.value + 1});
        this.props.updateValue(this.state.value);
    }

    render() {
        return (
            <button
                className = "click-button"
                onClick = {this.handleClick}
            >
                {this.state.value}
            </button>
        );
    }
}

export default AComponent;