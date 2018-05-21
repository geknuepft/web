import React, {Component} from 'react'

class Textbox extends Component {

    render() {
        return <div className="textbox">
            {this.props.children}
        </div>
    }
}

export default Textbox;
