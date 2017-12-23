import React, {Component} from 'react';
import './Filter.css';
import Slider from './Slider';

class LengthSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            overLength: false,
        }
    }

    render() {
        return <div className="filter-slider">
            <div className="tag">
                {this.state.overLength ?
                    <button onClick={() => (this.setState({overLength: false}))}>keine Überlänge</button> :
                    <button onClick={() => (this.setState({overLength: true}))}>Überlänge</button>
                }
            </div>
            <h4>{this.props.name_de}:</h4>
            <Slider
                name_de={this.props.name_de}
                min={this.props.min}
                max={this.state.overLength ? this.props.maxOverlength : this.props.max}
                step={this.props.step}
                markStep={this.props.markStep}
                defaultValue={this.props.defaultValue}
            />
        </div>
    }
}

const LengthArmbandSelector = () => (
    <LengthSelector
        name_de="Länge"
        min={9}
        max={18}
        maxOverlength={25}
        step={0.5}
        markStep={1}
        markLabel="cm"
        defaultValue={[14]}
    />
);

const LengthBuchzeichenSelector = () => (
    <LengthSelector
        name_de="Länge"
        min={15}
        max={29}
        maxOverlength={40}
        step={0.5}
        markStep={1}
        markLabel="cm"
        defaultValue={[20]}
    />
);

const LengthSchluesselSelector = () => (
    <LengthSelector
        name_de="Länge"
        min={3}
        max={12}
        maxOverlength={18}
        step={0.5}
        markStep={1}
        markLabel="cm"
        defaultValue={[6]}
    />
);

export {
    LengthArmbandSelector,
    LengthBuchzeichenSelector,
    LengthSchluesselSelector,
}