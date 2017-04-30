import React, {Component} from 'react';
import './Page.css'

class Page extends Component {
    render() {
        const headStyle = {
            backgroundImage: "url(" + this.props.headImagePath + ")"
        };

        return (
            <div>
                <div className="head" style={ headStyle }>
                    <span>{ this.props.title }</span>
                    { this.props.navigation }
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default Page;
