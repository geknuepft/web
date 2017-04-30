import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div id="menu">
                <ul className="nav">
                    <li><a >Home</a></li>
                    <li><a >Artikel</a></li>
                    <li><a >Herstellung</a></li>
                    <li><a >Materialen</a></li>
                    <li><a >Markttage</a></li>
                    <li><a >Kontakt</a></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
