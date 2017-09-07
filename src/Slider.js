import React, {Component} from 'react';
import RcSlider, {Range} from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import './Slider.css';
import './Tooltip.css'
import {range} from 'range';

const TooltipHandle = (props) => {
    const { value, dragging, index, ...restProps } = props;
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

    render() {

        const min = 10;
        const max = 16;

        let marks = {};
        range(min, max + 1).map((n) => {
            marks[n] = n;
        });

        return (
            <div>
                <Range
                    handle={TooltipHandle}
                    min={min}
                    max={max}
                    marks={marks}
                    step={0.5}
                    dots
                    defaultValue={[12, 14]}
                />
            </div>
        );
    }
}
;

export default Slider;