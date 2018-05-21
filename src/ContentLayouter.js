import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import './ContentLayouter.css'
import PropTypes from 'prop-types'


class ContentLayouter extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    };

    render() {
        let children = this.props.children;
        if (!Array.isArray(children)) {
            children = [children]
        }

        children = children.map((child,key) => <Col key={key} xs={12} sm={6}>{child}</Col>)

        if (children.length % 2) {
            children.push(<Col key="spacer" xs={12} sm={6} className="spacer"/>)
        }

        return <Row className="contentlayouter">
            {children}
        </Row>
    }
}

export default ContentLayouter;
