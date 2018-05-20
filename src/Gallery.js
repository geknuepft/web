import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Gallery.css'
import axios from 'axios'
import GalleryItem from './GalleryItem'
import config from 'react-global-configuration'
import InfiniteScroll from 'react-infinite-scroller'
import Article from './Article'

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
            activeItemIdx: null
        }
    }

    fetchDataFromApi = () => {
        axios.get(config.get('apiUrl') + 'Instance')
            .then(res => {
                this.setState({instances: res.data.slice(0,10)})
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

    render () {
        // render nothing if list is not loaded
        if (this.state.instances === null) {
            return null
        }

        const loader = <li key="loading">Lade ...</li>

        const activeItem = this.state.activeItemIdx !== null ? this.state.items[this.state.activeItemIdx] : null

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
                    {this.state.items.map((instance, itemIdx) =>
                        <GalleryItem
                            key={instance.instanceId}
                            {...instance}
                            open={() => {this.setState({activeItemIdx: itemIdx})}}
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
                {activeItem && <Article
                    instanceId={activeItem.instanceId}
                    close={() => this.setState({activeItemIdx: null})}
                    toPrev={() => this.setState({activeItemIdx: this.state.activeItemIdx - 1})}
                    toNext={() => this.setState({activeItemIdx: this.state.activeItemIdx + 1})}
                />}
            </div>
        )
    }
}

export default Gallery
