import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Article from './Article'
import './ArticleModal.css'

class ArticleModal extends Component {

    render () {
        return <ReactModal
            onRequestClose={this.props.onRequestClose}
            isOpen={this.props.article !== null}
            closeTimeoutMS={150}
        >
            <Article {...this.props}/>
        </ReactModal>
    }

}

export default ArticleModal
