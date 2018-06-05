import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemContainer = styled.div`
  border: 1px solid;
  margin: 10px;
  width: 350px;
  height: 100px;
  display: flex;
  background-color: ${(props) => props.highlighted ? 'grey' : 'inherit'};
`;

const AvatarContainer = styled.div`
  border: 2px solid;
  min-width: 100px;
  height: 100%;
`;

const InfoContainer = styled.div`
  margin: 5px;
`;

const Avatar = styled.img`
  width: 100%;
`;

export default class Item extends React.Component { // eslint-disable-line react/prefer-stateless-function
  briefLength = 90;

  shorted = (bio) => {
    if (bio) {
      return bio.length > this.briefLength ? bio.substr(0, this.briefLength) : bio;
    }
    return null;
  }

  render() {
    const { employee, display, highlighted } = this.props;
    return (<ItemContainer highlighted={highlighted} onClick={() => display(employee)}>
      <AvatarContainer>
        <Avatar src={employee.avatar} alt="avatar" />
      </AvatarContainer>
      <InfoContainer>
        <div style={{ fontWeight: 'bold' }}>{employee.firstName} {employee.lastName}</div>
        <div style={{ fontSize: '0.8rem' }}>{this.shorted(employee.bio)}</div>
      </InfoContainer>
    </ItemContainer>);
  }
}

Item.propTypes = {
  employee: PropTypes.object,
  display: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
};
