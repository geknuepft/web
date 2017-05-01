import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom'

const Navigation = (props) => (
    <div className="navigation">
        <ul>
            { props.children }
        </ul>
    </div>
);

const NavigationElement = (props) => {
    const to = (props.pathPrefix ? props.pathPrefix : '/')
        + props.name;

    return (
        <li>
            <Link to={ to }>
                { props.title ? props.title : props.name }
            </Link>
        </li>
    );
};

export {Navigation, NavigationElement};
