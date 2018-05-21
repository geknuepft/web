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

const itemsBatchSize = 32

class Gallery extends Component {

    constructor (props) {
        super(props)

        this.state = {
            items: null,
            displayUpToItemIndex: itemsBatchSize,
            activeItemIndex: null
        }
    }

    fetchDataFromApi = () => {
        axios.get(config.get('apiUrl') + 'Instance')
            .then(res => {
                this.setState({items: res.data})
            })
    }

    componentDidMount () {
        this.fetchDataFromApi()
    }

    loadItems (page) {
        this.setState({displayUpToItemIndex: this.state.displayUpToItemIndex + itemsBatchSize})
    }

    onItemSelect (itemIndex) {
        if (this.state.items === null) return
        if (itemIndex === this.state.activeItemIndex) return

        this.setState({
            activeItemIndex: Math.max(0, Math.min(this.state.items.length - 1, itemIndex))
        })
    }

    render () {
        // render nothing if list is not loaded
        if (this.state.items === null) return null

        const hasMore = this.state.displayUpToItemIndex <= this.state.items.length

        let displayedItems = this.state.items.slice(0, this.state.displayUpToItemIndex).map(
            (instance, itemIndex) => <GalleryItem
                key={instance.instanceId}
                {...instance}
                open={() => this.setState({activeItemIndex: itemIndex})}
            />
        )

        if (!hasMore) {
            displayedItems = displayedItems.concat(
                Array.from(Array(14).keys()).map((v, k) => <li key={'empty_' + k} className="empty"/>)
            )
        }

        return <div className="gallery">
            <GalleryIntro numberOfItems={this.state.items.length}/>
            <InfiniteScroll
                element="ul"
                className="gallery"
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={hasMore}
                loader={<li key="loading">Lade ...</li>}
            >
                {displayedItems}
            </InfiniteScroll>
            <ArticleModal
                article={this.state.activeItemIndex !== null ? this.state.items[this.state.activeItemIndex] : null}
                onRequestClose={() => this.setState({activeItemIndex: null})}
                onRequestPrev={() => this.onItemSelect(this.state.activeItemIndex - 1)}
                onRequestNext={() => this.onItemSelect(this.state.activeItemIndex + 1)}
                teaser={<ArticleTeaser items={this.state.items}
                                       activeItemIndex={this.state.activeItemIndex}
                                       onItemSelect={this.onItemSelect.bind(this)}
                />
                }
            />
        </div>
    }
}

export default Gallery
