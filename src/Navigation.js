import React, {Component} from 'react';
import './Navigation.css';
import {Link, Route} from 'react-router-dom'

const Navigation = (props) => (
    <div className="navigation">
        <ul>
            { props.children }
        </ul>
    </div>
);

class NavigationElement extends Component {
    render() {
        const to = (this.props.pathPrefix ? this.props.pathPrefix : '/')
            + this.props.name;

        return (
            <Route path={to} children={
                ({match}) => (
                    <li className={this.props.className + match ? ' active' : ''}>
                        <Link to={to}>
                            { this.props.title ? this.props.title : this.props.name }
                        </Link>
                    </li>
                )
            }/>
        );
    };
}

export {Navigation, NavigationElement};
