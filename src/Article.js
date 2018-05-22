import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import config from 'react-global-configuration'
import ImageScroller from './ImageScroller'
import { InstanceSpecifics } from './Specifics'
import { Container, Row, Col } from 'reactstrap'
import SmartImage from './SmartImage'
import './Article.css'
import { ButtonNext, ButtonPrevious, ButtonClose } from './Button'

class ArticleTeaser extends Component {

    static propTypes = {
        items: PropTypes.array,
        activeItemIndex: PropTypes.number,
        onItemSelect: PropTypes.func,
    }

    render () {
        const numbPics = 7

        if (this.props.items === undefined) return null
        if (this.props.activeItemIndex === null) return null

        const activeItemIndex = this.props.activeItemIndex
        const startIndex = Math.max(0, activeItemIndex - Math.floor(numbPics / 2))
        const endIndex = startIndex + numbPics
        const items = this.props.items.slice(startIndex, endIndex)

        return <ul className="article-teaser">
            {items.map(
                (item, slicedItemIndex) =>
                    <li key={item.instanceId}
                        className={startIndex + slicedItemIndex === activeItemIndex ? 'active' : ''}>
                        <a onClick={() => this.props.onItemSelect(startIndex + slicedItemIndex)}>
                            <SmartImage path={item.picture0} height={80}/>
                        </a>
                    </li>
            )}
        </ul>
    }

}

class Article extends Component {

    static propTypes = {
        article: PropTypes.object,
        onRequestClose: PropTypes.func,
        onRequestPrev: PropTypes.func,
        onRequestNext: PropTypes.func,

        teaser: PropTypes.object
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

        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.instanceData === null && this.props.article !== null) {
            this._loadAsyncData(this.props.article.instanceId)
        }
    }

    handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            this.props.onRequestPrev()
        } else if (event.key === 'ArrowRight') {
            this.props.onRequestNext()
        }
    }

    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    _loadAsyncData (instanceId) {
        this._asyncRequest = axios.get(config.get('apiUrl') + 'Instance/' + instanceId)
            .then(res => {
                this.setState({instanceData: res.data})
            })
    }

    render () {
        let content = null
        if (this.state.instanceData !== null) {

            const images = this.state.instanceData.images.concat([
                {'imageType': 'Nahaufnahme', 'path': 'square-narrow_white_single_plan_setup0/161116_4/IMG_4030.JPG'},
                {'imageType': 'Nahaufnahme', 'path': 'square-narrow_white_single_plan_setup0/161116_2/IMG_3804.JPG'},
                {'imageType': 'Nahaufnahme', 'path': 'square-narrow_white_single_plan_setup0/170810_3/IMG_4377.JPG'},
                {'imageType': 'Nahaufnahme', 'path': 'square-narrow_white_single_plan_setup0/170809_5/IMG_4930.JPG'},
                {'imageType': 'Nahaufnahme', 'path': 'square-narrow_white_single_plan_setup0/170809_5/IMG_4938.JPG'},
                {'imageType': 'Nahaufnahme', 'path': 'square-narrow_white_single_plan_setup0/170810_1/IMG_4281.JPG'},
                {'imageType': 'Nahaufnahme', 'path': 'square-narrow_white_single_plan_setup0/170809_2/IMG_4759.JPG'}
            ])

            //console.log(JSON.stringify(this.state.instanceData.images))

            content = <Row>
                <Col xs={6}>
                    <ImageScroller images={images}/>
                </Col>
                <Col cs={6}>
                    <InstanceSpecifics {...this.state.instanceData} />
                </Col>
            </Row>
        }

        return <div className="article" onKeyDown={(e) => {console.log(e)}}>
            {content}
            {this.props.onRequestClose && <ButtonClose className="close" onClick={this.props.onRequestClose}/>}
            {this.props.onRequestPrev && <ButtonPrevious onClick={this.props.onRequestPrev}/>}
            {this.props.teaser}
            {this.props.onRequestNext && <ButtonNext onClick={this.props.onRequestNext}/>}
        </div>
    }

}

export default Article
export { ArticleTeaser }
