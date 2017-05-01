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
            <li>
                <Route path={to} children={
                    ({match}) => (
                        <Link to={to} className={this.props.className + match ? ' active' : ''}>
                            { this.props.title ? this.props.title : this.props.name }
                        </Link>
                    )
                }/>
            </li>
        );
    };
}

export {Navigation, NavigationElement};
