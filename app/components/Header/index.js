import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCompanyInfo } from 'containers/App/selectors';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  min-height: 80px;
  background-color: #b1b1b1;
  border-bottom: 2px solid;
  padding: 10px;
`;

const CompanyName = styled.div`
  font-size: 1.3rem;
`;


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { companyInfo } = this.props;
    return !companyInfo ? (
      <div></div>
    ) : (
      <HeaderContainer>
        <CompanyName>
          {companyInfo ? companyInfo.companyName : null}
        </CompanyName>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ width: '50%', minWidth: '312px' }}>
            {companyInfo.companyMotto}
          </div>
          <div style={{ width: '50%', minWidth: '312px', textAlign: 'right' }}>
            Since: {companyInfo.companyEst}
          </div>
        </div>
      </HeaderContainer>
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
