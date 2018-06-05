import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectEmployees } from 'containers/App/selectors';
import PropTypes from 'prop-types';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { employees } = this.props;

    return (
      <div>
        Home Page
        <div>
          {employees ? employees.length : null}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  employees: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  employees: makeSelectEmployees(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(HomePage);
