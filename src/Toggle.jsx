import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
    state = {
        checked: false
    }

    toggle() {
        this.setState((prevState) => ({ checked: !prevState.checked }))
    }

    render() {
        return (
            <label className="Toggle relative dib outline-0">
                <input type="checkbox" className="Toggle__Checkbox absolute"
                    value={this.state.checked} onChange={this.toggle.bind(this)} />
                <div className="Toggle__Slider absolute pointer top-0 left-0 br-pill bg-white"></div>
            </label>
        )
    }
}

export default Toggle;