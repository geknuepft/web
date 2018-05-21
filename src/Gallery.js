import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Gallery.css'
import axios from 'axios'
import GalleryItem from './GalleryItem'
import config from 'react-global-configuration'
import InfiniteScroll from 'react-infinite-scroller'
import ArticleModal from './ArticleModal'
import { ArticleTeaser } from './Article'

const GallerySorter = () => (
    <select className="inline">
        <option value="new">Neuste zuoberst</option>
        <option value="old">Älteste zuoberst</option>
        <option value="price_up">Preis aufsteigend</option>
        <option value="price_down">Preis absteigend</option>
    </select>
)

class GalleryIntro extends Component {

    static propTypes = {
        numberOfItems: PropTypes.number.isRequired,
    }

    render () {
        return (
            <div className="intro">
                <div className="intro-desc">
                    <p>Ihre Auswahl umfasst folgende <span className="bold">{this.props.numberOfItems}</span> Aritkel:
                    </p>
                </div>
                <div className="intro-desc right">
                    <p>sortieren nach:
                        <GallerySorter/>
                    </p>
                </div>
            </div>
        )
    }
}

class Gallery extends Component {

    constructor (props) {
        super(props)

        this.state = {
            instances: null,
            items: [],
            hasMoreItems: true,
            activeItemIndex: null
        }
    }

    fetchDataFromApi = () => {
        axios.get(config.get('apiUrl') + 'Instance')
            .then(res => {
                this.setState({instances: res.data})
            })
    }

    componentDidMount () {
        this.fetchDataFromApi()
    }

    loadItems (page) {
        let items = this.state.items
        for (let i = 0; i < 32 && this.state.instances.length > 0; ++i) {
            items.push(this.state.instances.pop())
        }
        this.setState({
            items: items,
            hasMoreItems: this.state.instances.length > 0,
        })

    }

    onItemSelect(itemIndex) {
        if (itemIndex === this.state.activeItemIndex) return;

        this.setState({
            activeItemIndex: Math.max(0, Math.min(this.state.items.length-1, itemIndex))
        })
    }

    render () {
        // render nothing if list is not loaded
        if (this.state.instances === null) {
            return null
        }

        const loader = <li key="loading">Lade ...</li>

        return (
            <div className="gallery">
                <GalleryIntro numberOfItems={this.state.instances.length}/>
                <InfiniteScroll
                    element="ul"
                    className="gallery"
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    loader={loader}
                >
                    {this.state.items.map((instance, itemIndex) =>
                        <GalleryItem
                            key={instance.instanceId}
                            {...instance}
                            open={() => this.setState({activeItemIndex: itemIndex})}
                        />
                    )}
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                    <li className="empty"/>
                </InfiniteScroll>
                <ArticleModal
                    article={this.state.activeItemIndex !== null ? this.state.items[this.state.activeItemIndex] : null}
                    onRequestClose={() => this.setState({activeItemIndex: null})}
                    teaser={<ArticleTeaser items={this.state.items}
                                           activeItemIndex={this.state.activeItemIndex}
                                           onItemSelect={this.onItemSelect.bind(this)}
                    />
                    }
                />
            </div>
        )
    }
}

export default Gallery
