import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as history from 'history';
import classnames from 'classnames';
import { getResultsData } from 'action/public';
// Action
// Model

interface IIndexPageProps extends React.ClassAttributes<any> {
  getResultsData: () => void;
}

interface IIndexPageState extends React.ClassAttributes<any> {

}

class IndexPage extends React.Component<IIndexPageProps, IIndexPageState> {

  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    const { getResultsData } = this.props;
    getResultsData();
  }

  public render() {
    return (
      <div className="dark-theme">
        <div className="container">
          <h2>Welcome to the</h2>
          <div className="logo">
            <img src="images/logo.svg" alt="Trivia"/>
          </div>
          <form action="" className="start-testing-form">
            <div className="input-group">
              <label htmlFor="difficulty">
                <span className="img-wrap">
                  <img src="images/cup.svg" alt="Cup icon"/>
                </span>
                <span>Difficulty</span>
              </label>
              <select name="difficulty" id="difficulty">
                <option value="easy">easy</option>
                <option value="hard">hard</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="difficulty">
                <span className="img-wrap">
                  <img src="images/star.svg" alt="Star icon"/>
                </span>
                <span>Amount</span>
              </label>
              <input type="number"/>
            </div>
            <button type="button" className="btn">true</button>
          </form>
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
