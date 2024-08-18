import React from 'react';

class OutputScreen extends React.Component {
    render() {
        return (
            <div className="output-screen">
                <div className="question">{this.props.question}</div>
                <div className="answer">{this.props.answer}</div>
            </div>
        );
    }
}

export default OutputScreen;
