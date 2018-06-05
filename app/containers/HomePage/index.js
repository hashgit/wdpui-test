import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectEmployees } from 'containers/App/selectors';
import PropTypes from 'prop-types';
import Item from 'components/Item';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { employees } = this.props;
    const listItems = employees ? employees.map((emp) => <Item employee={emp} />) : null;

    return (
      <div>
        <div style={{ padding: '10px' }}>
          <h3>Our Employees</h3>
          <hr />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {listItems}
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
