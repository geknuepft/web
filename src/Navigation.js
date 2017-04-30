import React, {Component} from 'react';
import './Navigation.css';

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
    <li><a>{ props.name }</a></li>
);

export {Navigation, NavigationElement};
