import React, {Component} from 'react';
import RcSlider, {Range} from 'rc-slider';
//import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import {range} from 'range';

const SliderHandle = RcSlider.Handle;

const TooltipHandle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <div>
            <SliderHandle value={value} {...restProps} />


            <ul>
                <li key>a3</li>
                <li>b</li>
            </ul>
        </div>
    );
};

class Slider extends Component {

    render() {

        const min = 0;
        const max = 16;

        let marks = {};
        range(min, max + 1, 2).map((n) => {
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