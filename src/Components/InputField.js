import React from 'react';

class InputField extends React.Component {
    render() {
        return (
            <input
                type="text"
                className="input-field"
                value={this.props.value}
                readOnly
            />
        );
    }
}

export default InputField;
