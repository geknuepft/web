import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import config from 'react-global-configuration'
import ImageScroller from './ImageScroller'
import './Article.css'
import './ArticleOverlay.css'
import { InstanceSpecifics } from './Specifics'
import { Grid, Row, Col } from 'react-bootstrap'

class Article extends Component {

    static propTypes = {
        instanceId: PropTypes.number.isRequired,
        close: PropTypes.func,
        toPrev: PropTypes.func,
        toNext: PropTypes.func,
    }

    state = {
        instanceData: null,
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (nextProps.instanceId !== prevState.prevInstanceId) {
            return {
                instanceData: null,
                prevInstanceId: nextProps.instanceId,
            }
        }

        return null
    }

    componentDidMount () {
        this._loadAsyncData(this.props.instanceId)
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.instanceData === null) {
            this._loadAsyncData(this.props.instanceId)
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

        return <div className="overlay overlay-contentpush">
            <button type="button" className="overlay-close" onClick={this.props.close}>Close</button>
            <Grid>
                <Row>
                    <Col xs={6}>
                        <ImageScroller images={this.state.instanceData.images}/>
                    </Col>
                    <Col cs={6}>
                        <InstanceSpecifics {...this.state.instanceData} />
                    </Col>
                </Row>
            </Grid>
        </div>
    }

}

export default Article
