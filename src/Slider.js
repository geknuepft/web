import React, {Component} from 'react';
import RcSlider, {Range} from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import './Slider.css';
import './Tooltip.css'
import {range} from 'range';
import PropTypes from 'prop-types';

class Slider extends Component {

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        markStep: PropTypes.number,
        markLabel: PropTypes.string,
        defaultValue: PropTypes.array.isRequired,
    };

    render() {
        const min = this.props.min;
        const max = this.props.max;
        const markStep = this.props.markStep !== undefined ? this.props.markStep : this.props.step;

        // generate marks
        let markLabel = (m) => (m);
        if (this.props.markLabel !== undefined) {
             markLabel = (m) => m + ' ' + this.props.markLabel
        }

        let marks = {};
        const numbMarks = Math.floor((max - min) / markStep);
        const secondMark = markStep * Math.floor(min / markStep) + markStep;
        marks[min] = markLabel(min);
        range(0, numbMarks).map((n) => {
            const s = secondMark + n * markStep;
            marks[s] = markLabel(s);
            return null;
        });
        marks[max] = markLabel(max);

        // generate tooltip
        const TooltipHandle = (props) => {
            const {value, dragging, index, ...restProps} = props;
            return (
                <Tooltip
                    prefixCls="rc-slider-tooltip"
                    overlay={markLabel(value)}
                    visible={dragging}
                    placement="top"
                    key={index}
                >
                    <RcSlider.Handle value={value} {...restProps} />
                </Tooltip>
            );
        };

        return <Range
            handle={TooltipHandle}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            marks={marks}
            dots={true}
            defaultValue={this.props.defaultValue}
        />
    }
}


export default Slider;