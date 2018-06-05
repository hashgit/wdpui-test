import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCompanyInfo } from 'containers/App/selectors';
import PropTypes from 'prop-types';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { companyInfo } = this.props;
    return (
      <div>
        Header
        <div>
          {companyInfo ? companyInfo.companyName : null}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  companyInfo: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  companyInfo: makeSelectCompanyInfo(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(Header);
