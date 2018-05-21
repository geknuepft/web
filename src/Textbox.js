import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Col} from 'reactstrap'
import './Textbox.css'

class Textbox extends Component {

    static propTypes = {
        text: PropTypes.object,
    };

    render() {
        return (
            <Col xs={12} sm={6} className="textbox">
                {this.props.text}
            </Col>
        );
    }
}

export default Textbox;
