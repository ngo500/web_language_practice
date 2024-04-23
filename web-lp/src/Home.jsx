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
    an: '한시'
  },
  {
    qu: '2:00',
    an: '두시'
  },
  {
    qu: '3:00',
    an: '세시'
  },
  {
    qu: '4:00',
    an: '네시'
  },
  {
    qu: '5:00',
    an: '다섯시'
  },
  {
    qu: '6:00',
    an: '여섯시'
  },
  {
    qu: '7:00',
    an: '일곱시'
  },
  {
    qu: '8:00',
    an: '여덟시'
  },
  {
    qu: '9:00',
    an: '아홉시'
  },
  {
    qu: '10:00',
    an: '열시'
  },
  {
    qu: '11:00',
    an: '열한시'
  },
  {
    qu: '12:00',
    an: '열두시'
  }
];


class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        currentQuestion: 1, //current question being displayed
        showSubmit: true,   //showSubmit true if submit button has not been clicked for input
        showScore: false,   //showScore false if more questions exist
        showAnswer: false   //showAnswer false if input is not submit
      };
      this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
      this.handleContinueButtonClick = this.handleContinueButtonClick.bind(this);
      this.score = {
        currentScore: 0   //current total correct score
      };
    }//constructor

    handleSubmitButtonClick(){
      //submit button was clicked, so show answer
      this.setState ({ showAnswer: true });
      //hide submit button
      this.setState ({ showSubmit: false });
    }//handleSubmitButtonClick

    handleContinueButtonClick(){
      //check if answer entered was correct- add to total correct score if so
      if(document.getElementById("Answer-Input").value === question[this.state.currentQuestion].an){
        this.score.currentScore++;
      }//if

      //clear input box for next question
      document.getElementById("Answer-Input").value = "";

      //hide continue button
      this.setState ({ showAnswer: false });

      //show submit button
      this.setState ({ showSubmit: true });

      //if there are more questions, go to next question
      if(this.state.currentQuestion < question.length-1){
        this.setState({ currentQuestion: this.state.currentQuestion + 1 });
      }//if
      else{ //else, no more questions, show total score
        this.setState( {showSubmit: false} );
        this.setState({ showScore: true });
      }//else
    }//handleContinueButtonClick

    render() {
        return (
            <div className="App">
            {this.state.showScore ? ( //if there are no more questions, display final score
              <div className="Total-Score">
                <span>Your final score: </span>
                <span>{this.score.currentScore}/{question.length-1}</span>
              </div>
            ) : ( //else display questions
              <>
                <h2>몇 시예요?</h2>
                <span>Question {this.state.currentQuestion}</span>
                <p></p>
                <div className="Question-Display">
                  {question[this.state.currentQuestion].qu}
                </div>
                <input name="Answer-Input" id="Answer-Input"></input>
              </>
            )}
            {this.state.showSubmit &&
            (
              <>
              <div className="Button-Submit">
                <button onClick={() => this.handleSubmitButtonClick()}>Submit</button>
              </div>
              </>
            )
            }
            {this.state.showAnswer &&
            ( //if the input is submit, display the answer
              <>
              <div className="Answer-Display">
                <span>You input: {document.getElementById("Answer-Input").value} </span>
                <br></br>
                <span>Correct answer: {question[this.state.currentQuestion].an} </span>
                <br></br>
                <button onClick={() => this.handleContinueButtonClick()}>Continue</button>
              </div>
              </>
            )
            }
            </div>
        );
    }//render
}//Home

export default Home;
