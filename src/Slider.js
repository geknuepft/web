import React, {Component} from 'react';
import RcSlider, {Range} from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import './Slider.css';
import './Tooltip.css'
import {range} from 'range';
import PropTypes from 'prop-types';

const TooltipHandle = (props) => {
    const {value, dragging, index, ...restProps} = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <RcSlider.Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class Slider extends Component {

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        defaultValue: PropTypes.array.isRequired,
    };

    render() {

        const min = this.props.min;
        const max = this.props.max;

        let marks = {};
        range(min, max/5 ).map((n) => {
            marks[n] = n;
        });

        return <Range
            handle={TooltipHandle}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            dots={true}
            defaultValue={this.props.defaultValue}
        />
    }
}


export default Slider;