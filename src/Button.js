import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button type={ this.props.submit ? 'submit' : null}>{ this.props.caption }</button>
        )
    }
}

export default Button;