import React, {Component} from 'react';
import {FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';


const IntlFormats = {
    number: {
        CHF: {
            style: 'currency',
            currency: 'CHF',
        },
        length: {
            style: 'decimal',
        }
    }
};

class Chf extends Component {

    static propTypes = {
        value: PropTypes.number.isRequired,
    };

    render() {
        return (
            <FormattedNumber value={this.props.value} format="CHF"/>
        );
    }
}

class Mm extends Component {

    static propTypes = {
        valueMm: PropTypes.number.isRequired,
    };

    render() {
        return (
            <span>
                <FormattedNumber value={this.props.valueMm} format="length"/> mm
            </span>
        );
    }
}

class Cm extends Component {

    static propTypes = {
        valueMm: PropTypes.number.isRequired,
    };

    render() {
        return (
            <span>
                <FormattedNumber value={this.props.valueMm / 10} format="length"/> cm
            </span>
        );
    }
}

export {IntlFormats, Chf, Mm, Cm}