import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Article from './Article'
import './ArticleModal.css'
import { ButtonClose } from './Button'

class ArticleModal extends Component {

    render () {
        return <ReactModal
            onRequestClose={this.props.onRequestClose}
            isOpen={this.props.article !== null}
            closeTimeoutMS={150}
        >
            <ButtonClose className="close" onClick={this.props.onRequestClose}/>
            <Article {...this.props}/>
        </ReactModal>
    }

}

export default ArticleModal
