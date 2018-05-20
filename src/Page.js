import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './Page.css'

class Page extends Component {
    render() {
        const headStyle = {
            backgroundImage: "url(" + this.props.headImagePath + ")"
        };

        return (
            <Grid fluid>
                <Col xs={12} className="head" style={ headStyle }>
                    <span>{ this.props.title }</span>
                    { this.props.navigation }
                </Col>
                { this.props.children }
            </Grid>
        );
    }
}

export default Page;
