import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as history from 'history';
import classnames from 'classnames';
import { getResultsData } from 'action/public';
// Action
// Model
// Constants
import { DIFFICALTY_LIST } from 'constantList';

interface IIndexPageProps extends React.ClassAttributes<any> {
  getResultsData: () => void;
  history: history;
}

interface IIndexPageState extends React.ClassAttributes<any> {
  isValidate: boolean;
  fields: {
    difficulty: 'easy';
    amount: number;
  };
}

class IndexPage extends React.Component<IIndexPageProps, IIndexPageState> {

  constructor(props) {
    super(props);

    this.state = {
      isValidate: true,
      fields: {
        difficulty: 'easy',
        amount: null,
      },
    };

    this.goToQuiz = this.goToQuiz.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private goToQuiz() {
    if (this.handleValidation()) {
      this.props.history.push('/quiz');
    }
  }


  private handleValidation() {
    const fields = this.state.fields;
    const formIsValid = !fields.amount || fields.amount <= 0 ? false : true;
    this.setState({
      isValidate: formIsValid,
    });
    return formIsValid;
  }

  private handleChange(field, e) {
    const fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    this.handleValidation();
  }

  public componentDidMount() {
    const { getResultsData } = this.props;
    getResultsData();
  }

  public render() {
    return (
      <div className="dark-theme index-page">
        <div className="dark-theme-additional-bg">
          <div className="container">
            <h2>Welcome to the</h2>
            <div className="logo">
              <img src="./images/logo.png" alt="Trivia"/>
            </div>
            <form action="" className="start-testing-form">
              <div className="input-group">
                <label htmlFor="difficulty">
                  <span className="img-wrap">
                    <img src="./images/cup.svg" alt="Cup icon"/>
                  </span>
                  <span>Difficulty</span>
                </label>
                <div className="select-wrap">
                  <select name="difficulty" id="difficulty" onChange={ (e) => this.handleChange('difficulty', e) }>
                    { DIFFICALTY_LIST.map((item, i) => (
                        <option value={ item } key={ i }>{ item }</option>
                    )) };
                  </select>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="difficulty">
                  <span className="img-wrap">
                    <img src="./images/star.svg" alt="Star icon"/>
                  </span>
                  <span>Amount</span>
                </label>
                <input type="number" min="1" onChange={ (e) => this.handleChange('amount', e) }/>
                { !this.state.isValidate &&
                  <span className="form-field-error">Put correct amount of questions that more then 1</span>
                }
              </div>
              <div className="btn-wrap">
                <button type="button" className={ classnames('btn', { disable: !this.state.isValidate }) } onClick={ () => this.goToQuiz() } disabled={ !this.state.isValidate }>true</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getResultsData,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
