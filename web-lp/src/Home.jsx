import './App.css';
import React from 'react';
//import logo from './logo.svg';

const question = [
  {
    qu: '몇 시예요?',
    an: '... 시'
  },
  {
    qu: '1:00',
    an: '한 시'
  },
  {
    qu: '2:00',
    an: '두 시'
  },
  {
    qu: '3:00',
    an: '세 시'
  },
  {
    qu: '4:00',
    an: '네 시'
  },
  {
    qu: '5:00',
    an: '다섯 시'
  },
  {
    qu: '6:00',
    an: '여섯 시'
  },
  {
    qu: '7:00',
    an: '일곱 시'
  },
  {
    qu: '8:00',
    an: '여덟 시'
  },
  {
    qu: '9:00',
    an: '아홉 시'
  },
  {
    qu: '10:00',
    an: '열 시'
  },
  {
    qu: '11:00',
    an: '열한 시'
  },
  {
    qu: '12:00',
    an: '열두 시'
  }
];


class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        currentQuestion: 1,
        showScore: false
      };
      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.score = {
        currentScore: 0
      };
    }//constructor

    handleButtonClick(){
      if(document.getElementById("Answer-Input").value == this.state.currentQuestion.an){
        this.score.currentScore++;
      }//if

      if(this.state.currentQuestion < question.length-1){
        this.setState({ currentQuestion: this.state.currentQuestion + 1 });
      }//if
      else{
        this.setState({ showScore: true });
      }//else
    }//handleButtonClick

    render() {
        return (
            <div className="App">
            {this.state.showScore ? (
              <div className="Total-Score">{this.score.currentScore}/{question.length-1}</div>
            ) : (
              <>
                <span>Question {this.state.currentQuestion}</span>
                <div className="Question-Display">
                  {question[this.state.currentQuestion].qu}
                </div>
                <input name="Answer-Input"></input>
                <div className="Button-Submit">
                  <button onClick={() => this.handleButtonClick()}>Submit</button>
                </div>
              </>
            )}
            </div>
        );
    }//render
}//Home

export default Home;
