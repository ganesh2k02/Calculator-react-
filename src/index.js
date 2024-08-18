import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Title from './Components/Title';
import Button from './Components/Button';
import OutputScreen from './Components/OutputScreen';
import InputField from './Components/InputField';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { question: '', answer: '' };
    }

    handleClick = (label) => {
        if (label === '=') {
            this.calculateAnswer();
        } else if (label === 'C') {
            this.clear();
        } else {
            this.setState({ question: this.state.question + label });
        }
    }

    calculateAnswer = () => {
        try {
            this.setState({ answer: eval(this.state.question) });
        } catch (error) {
            this.setState({ answer: 'Error' });
        }
    }

    clear = () => {
        this.setState({ question: '', answer: '' });
    }

    render() {
        const buttons = [
            '1', '2', '3', '+',
            '4', '5', '6', '-',
            '7', '8', '9', '*',
            'C', '0', '=', '/'
        ];
        return (
            <div className="calculator">
                <Title />
                <OutputScreen question={this.state.question} answer={this.state.answer} />
                <div className="buttons">
                    {buttons.map((label) => (
                        <Button
                            key={label}
                            label={label}
                            onClick={this.handleClick}
                            className={label === '=' || label === 'C' || label === '+' || label === '-' || label === '*' || label === '/' ? 'operator' : ''}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
