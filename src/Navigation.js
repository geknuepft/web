import React, {Component} from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div id="navigation">
                <ul className="nav">
                    { this.props.children }
                </ul>
            </div>
        );
    }
}

const NavigationElement = (props) => (
    <li><Link to={props.name}>{ props.name }</Link></li>
);

export {Navigation, NavigationElement};
