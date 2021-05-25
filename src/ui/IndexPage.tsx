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
      <div>
        Hello world

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
