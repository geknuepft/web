import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import config from 'react-global-configuration'
import ImageScroller from './ImageScroller'
import { InstanceSpecifics } from './Specifics'
import { Grid, Row, Col } from 'react-bootstrap'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object,
        close: PropTypes.func,
        toPrev: PropTypes.func,
        toNext: PropTypes.func,
    }

    state = {
        instanceData: null,
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (nextProps.article !== null) {
            const nextInstanceId = nextProps.article.instanceId
            if (nextInstanceId !== prevState.prevInstanceId) {
                return {
                    instanceData: null,
                    prevInstanceId: nextInstanceId,
                }
            }
        }

        return null
    }

    componentDidMount () {
        if (this.props.article !== null) {
            this._loadAsyncData(this.props.article.instanceId)
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.instanceData === null && this.props.article !== null) {
            this._loadAsyncData(this.props.article.instanceId)
        }
    }

    _loadAsyncData (instanceId) {
        this._asyncRequest = axios.get(config.get('apiUrl') + 'Instance/' + instanceId)
            .then(res => {
                this.setState({instanceData: res.data})
            })
    }

    render () {
        if (this.state.instanceData === null) {
            return null
        }

        return <Grid>
            <Row>
                <Col xs={6}>
                    <ImageScroller images={this.state.instanceData.images}/>
                </Col>
                <Col cs={6}>
                    <InstanceSpecifics {...this.state.instanceData} />
                </Col>
            </Row>
        </Grid>
    }

}

export default Article
