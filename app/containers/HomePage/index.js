import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectEmployees } from 'containers/App/selectors';
import Modal from 'components/Modal';
import PropTypes from 'prop-types';
import Item from 'components/Item';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    modalOpen: false,
  }

  displayModal = (employee) => {
    this.setState({
      employee,
      modalOpen: true,
    });
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      modalOpen: false,
    });
  }

  render() {
    const { employees } = this.props;
    const listItems = employees ? employees.map((emp) => <Item key={emp.id} employee={emp} display={this.displayModal} />) : null;

    return (
      <div>
        <div style={{ padding: '10px' }}>
          <h3>Our Employees</h3>
          <hr />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {listItems}
        </div>
        <Modal employee={this.state.employee} open={this.state.modalOpen} onClose={this.closeModal} />
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
