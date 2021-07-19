import React, { Component } from 'react'
import ClickItem from '../ClickItem';
import Container from "../Container";
import data from "../../data.json";
console.log(data)

class NewGame extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        // this.setState({ data: this.shuffle(this.state.data) });
    };
    
    handleCorrectGuess = newData => {
        console.log("Guessed Correctly")
        console.log(data)
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);

        this.setState({
            data: this.shuffle(newData),
            score: newScore,
            topScore: newTopScore
        });
    };

    handleIncorrectGuess = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        });
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffle(resetData);
    }

    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
        
        return array
      }

    handleItemClick = id => {
        let guessedCorretly = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorretly = true;
                }
            }
            return newItem;
        });
        console.log(newData)
        guessedCorretly ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
    };


    render() {
        return (
            <div>
                <Container>
                    {this.state.data.map(item => (
                        <ClickItem key={item.id}
                            id={item.id}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.handleItemClick}
                            image={item.image} />
                    ))}
                </Container>
                <div>
                    <p>Score:{this.state.score}</p>
                    <p>TopScore:{this.state.topScore}</p>
                </div>
            </div>
        )
    }


}

export default NewGame;