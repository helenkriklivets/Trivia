import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as history from 'history';
import classnames from 'classnames';
import {getResultsData} from 'action/public';
// Action
// Model
import TestData from 'model/TestData';
import TestItem from 'model/TestItem';
import mainReducer from 'reducers/mainReducer';

interface IQuizPageProps extends React.ClassAttributes<any> {
    quiz: TestItem[];
    history: history;
    location: history.location;

}

interface IQuizPageState extends React.ClassAttributes<any> {
    activeItemIndex: number;
}

class QuizPage extends React.Component<IQuizPageProps, IQuizPageState> {

    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0,
        };

        this.handleAnswer = this.handleAnswer.bind(this);

    }

    private goToNext = () => {
        console.log(this.props.quiz);
        this.setState({
            activeItemIndex: (this.state.activeItemIndex + 1),
                // % this.props.quiz.length,
        });
    }

    private handleAnswer(e, answer) {
        console.log(answer);
    }

    public render() {
        const { quiz } = this.props;
        const quizItem = quiz ? quiz[this.state.activeItemIndex] : null;
        const questionNumber = this.state.activeItemIndex + 1;
        console.log('location state', quiz, 'item   ', quizItem);

        return (
            <div className="ligth-theme">
                <div className="ligth-theme-additional-bg">
                    { !!quizItem &&
                        <div className="container">
                            <h1>{ quizItem.category }</h1>
                            <h6>level 1</h6>
                            <div className="progress-bar-wrap">
                                <div className="progress-value">
                                    <span className="count">{ questionNumber < 10 ? `0${ questionNumber }` : questionNumber }</span>
                                    { <span className="count-max">/{ quiz.length < 10 ? `0${ quiz.length }` : quiz.length }</span> }
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"/>
                                </div>
                            </div>
                            <div className="question">
                                <p>{ quizItem.question }</p>
                            </div>
                            <div className="btn-wrap">
                                <button type="button" className="btn btn-dark" onClick={ (e) => this.handleAnswer(e, true) }>True</button>
                                <button type="button" className="btn btn-light" onClick={ (e) => this.handleAnswer(e, false) }>False</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    quiz: state.mainReducer.testData,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
