import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import './Page.css'

class Page extends Component {
    render() {
        const headStyle = {
            backgroundImage: "url(" + this.props.headImagePath + ")"
        };

        return (
            <Container>
                <Col xs={12} className="head" style={ headStyle }>
                    <span>{ this.props.title }</span>
                    { this.props.navigation }
                </Col>
                { this.props.children }
            </Container>
        );
    }
}

export default Page;
